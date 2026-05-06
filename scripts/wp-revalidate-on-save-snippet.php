<?php
/**
 * Tenth Rock — Revalidate Headless Frontend on Save
 *
 * Pings every configured Next.js front-end's /api/revalidate endpoint
 * whenever WordPress content changes, so editor edits appear instantly
 * instead of waiting for the 30-minute ISR cache to expire.
 *
 * Hooks:
 *   - acf/save_post (prio 20) — fires AFTER ACF writes its meta
 *   - save_post                — covers non-ACF edits & quick-edits
 *   - before_delete_post       — handle deletions
 *   - transition_post_status   — handle publish/unpublish/trash
 *
 * Configuration injected by scripts/install-revalidate-snippet.mjs
 * (do not edit the constants below by hand — re-run the installer).
 */

if ( ! defined( 'TR_REVALIDATE_URLS' ) ) {
    define( 'TR_REVALIDATE_URLS', __TR_REVALIDATE_URLS_JSON__ );
}
if ( ! defined( 'TR_REVALIDATE_SECRET' ) ) {
    define( 'TR_REVALIDATE_SECRET', '__TR_REVALIDATE_SECRET__' );
}

/**
 * Fire one fire-and-forget POST per configured front-end.
 * Static guard ensures we only ping once per WP request, even if
 * multiple hooks fire for the same save.
 */
function tr_revalidate_frontends( $post_id = 0, $reason = '' ) {
    static $already_fired = array();

    $key = (string) $post_id . '|' . $reason;
    if ( isset( $already_fired[ $key ] ) ) {
        return;
    }
    $already_fired[ $key ] = true;

    $urls   = json_decode( TR_REVALIDATE_URLS, true );
    $secret = TR_REVALIDATE_SECRET;
    if ( ! is_array( $urls ) || empty( $secret ) ) {
        return;
    }

    $payload = wp_json_encode( array(
        'secret' => $secret,
        'type'   => 'all',
    ) );

    foreach ( $urls as $base ) {
        $base = rtrim( (string) $base, '/' );
        if ( ! $base ) {
            continue;
        }
        wp_remote_post( $base . '/api/revalidate', array(
            'method'    => 'POST',
            'timeout'   => 0.01,        // fire-and-forget
            'blocking'  => false,
            'headers'   => array( 'Content-Type' => 'application/json' ),
            'body'      => $payload,
            'sslverify' => false,
        ) );
    }

    if ( function_exists( 'error_log' ) ) {
        error_log( sprintf(
            '[tr-revalidate] post=%d reason=%s targets=%d',
            (int) $post_id,
            $reason,
            count( $urls )
        ) );
    }
}

/**
 * Should this post type / status trigger a revalidation?
 * Skip auto-drafts, revisions, autosaves, and the special WP types.
 */
function tr_revalidate_should_handle( $post_id ) {
    if ( ! $post_id ) {
        return false;
    }
    if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
        return false;
    }
    $post = get_post( $post_id );
    if ( ! $post ) {
        return false;
    }
    $skip_types = array( 'revision', 'auto-draft', 'nav_menu_item', 'customize_changeset', 'oembed_cache', 'user_request', 'wp_block', 'wp_template', 'wp_template_part', 'wp_global_styles', 'wp_navigation' );
    if ( in_array( $post->post_type, $skip_types, true ) ) {
        return false;
    }
    if ( $post->post_status === 'auto-draft' ) {
        return false;
    }
    return true;
}

// ACF — fires after every ACF field write (the primary trigger for editor saves)
add_action( 'acf/save_post', function ( $post_id ) {
    if ( ! is_numeric( $post_id ) ) {
        return; // options-page saves use string IDs like 'options'
    }
    if ( ! tr_revalidate_should_handle( (int) $post_id ) ) {
        return;
    }
    tr_revalidate_frontends( (int) $post_id, 'acf/save_post' );
}, 20 );

// Standard save (Quick Edit, Bulk Edit, REST writes that bypass ACF)
add_action( 'save_post', function ( $post_id, $post, $update ) {
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }
    if ( ! tr_revalidate_should_handle( (int) $post_id ) ) {
        return;
    }
    tr_revalidate_frontends( (int) $post_id, 'save_post' );
}, 30, 3 );

// Deletions
add_action( 'before_delete_post', function ( $post_id ) {
    if ( ! tr_revalidate_should_handle( (int) $post_id ) ) {
        return;
    }
    tr_revalidate_frontends( (int) $post_id, 'before_delete_post' );
} );

// Status transitions (publish ↔ draft, trash, untrash)
add_action( 'transition_post_status', function ( $new_status, $old_status, $post ) {
    if ( $new_status === $old_status ) {
        return;
    }
    if ( ! $post || ! isset( $post->ID ) ) {
        return;
    }
    if ( ! tr_revalidate_should_handle( (int) $post->ID ) ) {
        return;
    }
    tr_revalidate_frontends( (int) $post->ID, 'transition:' . $old_status . '->' . $new_status );
}, 10, 3 );

// ACF Options pages — global header/footer/etc.
add_action( 'acf/save_post', function ( $post_id ) {
    if ( is_numeric( $post_id ) ) {
        return;
    }
    tr_revalidate_frontends( 0, 'acf-options:' . (string) $post_id );
}, 21 );
