<?php
/**
 * Register Page Templates — Tenth Rock Headless WordPress
 *
 * Code Snippets Plugin Snippet ID: 6
 *
 * Registers the headless page-template system used by the Next.js frontend.
 *
 * Approach (two-track, native-picker preferred):
 *   1. Native track (preferred): each headless template is registered as a
 *      virtual `wp_template` (block template) under the synthetic theme slug
 *      `headless`. This makes them appear in WordPress's native
 *      "Choose a template" modal in the page editor. When an editor picks
 *      one, WordPress stores `_wp_page_template = "headless//template-foo"`
 *      automatically — no JS needed.
 *   2. Fallback track: a `_headless_template` post-meta + custom Gutenberg
 *      sidebar panel ("Headless Template") under Document Settings. Older
 *      pages that were set this way continue to work.
 *
 * Both tracks feed a single resolver. The REST field `headless_template`
 * and the GraphQL field `Page.headlessTemplate` first try the native
 * `page_template` slug (stripping the `headless//` namespace), then fall
 * back to the `_headless_template` meta. The frontend always sees a clean
 * slug like `template-homepage`.
 *
 * Templates registered (15, mirroring lib/config/post-types.ts):
 *   template-homepage, template-privacy-policy, template-terms-of-service,
 *   template-commercial-waste, template-who-we-serve, template-our-process,
 *   template-about, template-locations, template-location,
 *   template-join-our-network, template-faq, template-contact,
 *   template-request-a-service, template-book-a-call, template-thank-you
 */

if ( ! defined( 'ABSPATH' ) ) {
    return;
}

// ─────────────────────────────────────────────────────────────
// Template registry — single source of truth on the WP side.
// Mirrors PAGE_TEMPLATE_CONFIG in lib/config/post-types.ts.
// ─────────────────────────────────────────────────────────────

if ( ! function_exists( 'tr_headless_templates' ) ) {
    function tr_headless_templates() {
        return array(
            ''                            => 'Default (no headless template)',
            'template-homepage'           => 'Homepage',
            'template-about'              => 'About Us',
            'template-commercial-waste'   => 'Commercial Waste Services',
            'template-who-we-serve'       => 'Who We Serve',
            'template-our-process'        => 'Our Process',
            'template-locations'          => 'Where We Serve',
            'template-location'           => 'Location Template',
            'template-join-our-network'   => 'Join Our Network',
            'template-faq'                => 'FAQs',
            'template-contact'            => 'Contact Us',
            'template-request-a-service'  => 'Request A Service',
            'template-book-a-call'        => 'Book a Call',
            'template-thank-you'          => 'Thank You',
            'template-privacy-policy'     => 'Privacy Policy',
            'template-terms-of-service'   => 'Terms of Service',
        );
    }
}

if ( ! defined( 'TR_HEADLESS_THEME' ) ) {
    define( 'TR_HEADLESS_THEME', 'headless' );
}

// ─────────────────────────────────────────────────────────────
// Resolve the effective headless slug for a given page id, looking
// at the native page-template field first and the meta as backup.
// ─────────────────────────────────────────────────────────────

if ( ! function_exists( 'tr_resolve_headless_template_slug' ) ) {
    function tr_resolve_headless_template_slug( $post_id ) {
        $allowed = array_keys( tr_headless_templates() );

        $native = get_page_template_slug( $post_id );
        if ( is_string( $native ) && $native !== '' ) {
            $slug = ( strpos( $native, '//' ) !== false )
                ? explode( '//', $native, 2 )[1]
                : $native;
            if ( in_array( $slug, $allowed, true ) && $slug !== '' ) {
                return $slug;
            }
        }

        $meta = get_post_meta( $post_id, '_headless_template', true );
        $meta = is_string( $meta ) ? $meta : '';
        return in_array( $meta, $allowed, true ) ? $meta : '';
    }
}

// ─────────────────────────────────────────────────────────────
// 1. NATIVE TRACK — virtual block templates
//    Inject the 15 headless templates into the native "Choose a
//    template" modal by hooking the block-templates registry.
// ─────────────────────────────────────────────────────────────

if ( ! function_exists( 'tr_build_headless_block_template' ) ) {
    function tr_build_headless_block_template( $slug, $title ) {
        if ( ! class_exists( 'WP_Block_Template' ) ) {
            return null;
        }
        $tpl = new WP_Block_Template();
        $tpl->id             = TR_HEADLESS_THEME . '//' . $slug;
        $tpl->theme          = TR_HEADLESS_THEME;
        $tpl->slug           = $slug;
        $tpl->title          = $title;
        $tpl->description    = 'Headless Next.js template — content rendered by the frontend.';
        $tpl->source         = 'plugin';
        $tpl->origin         = 'plugin';
        $tpl->type           = 'wp_template';
        $tpl->status         = 'publish';
        $tpl->has_theme_file = false;
        $tpl->is_custom      = false;
        $tpl->author         = null;
        $tpl->modified       = null;
        // A minimal body so the editor can preview/render the template.
        $tpl->content        = '<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#888"}}} --><p class="has-text-align-center" style="color:#888">This page uses the headless <strong>' . esc_html( $title ) . '</strong> template. Visual rendering is handled by the Next.js frontend.</p><!-- /wp:paragraph -->';
        // Limit visibility to pages so we don't pollute other post types.
        $tpl->post_types     = array( 'page' );
        return $tpl;
    }
}

/**
 * Inject our virtual templates into list queries (modal & REST).
 */
add_filter( 'get_block_templates', function ( $templates, $query, $template_type ) {
    if ( $template_type !== 'wp_template' ) {
        return $templates;
    }
    // If a specific theme/slug was requested, only inject when ours matches.
    if ( ! empty( $query['theme'] ) && $query['theme'] !== TR_HEADLESS_THEME ) {
        return $templates;
    }
    // If filtered to a specific post type, only inject when 'page' is included.
    if ( ! empty( $query['post_type'] ) && $query['post_type'] !== 'page' ) {
        return $templates;
    }
    $requested_slugs = isset( $query['slug__in'] ) && is_array( $query['slug__in'] )
        ? $query['slug__in'] : null;

    foreach ( tr_headless_templates() as $slug => $title ) {
        if ( $slug === '' ) {
            continue;
        }
        if ( $requested_slugs !== null && ! in_array( $slug, $requested_slugs, true ) ) {
            continue;
        }
        // Avoid duplicates if WordPress already produced one with the same id.
        $id = TR_HEADLESS_THEME . '//' . $slug;
        $already = false;
        foreach ( $templates as $existing ) {
            if ( isset( $existing->id ) && $existing->id === $id ) {
                $already = true;
                break;
            }
        }
        if ( $already ) {
            continue;
        }
        $tpl = tr_build_headless_block_template( $slug, $title );
        if ( $tpl ) {
            $templates[] = $tpl;
        }
    }
    return $templates;
}, 10, 3 );

/**
 * Resolve a single virtual template by id (used when WP renders it
 * or when the editor fetches one by id).
 */
add_filter( 'get_block_template', function ( $block_template, $id, $template_type ) {
    if ( $block_template instanceof WP_Block_Template ) {
        return $block_template;
    }
    if ( $template_type !== 'wp_template' ) {
        return $block_template;
    }
    if ( strpos( $id, TR_HEADLESS_THEME . '//' ) !== 0 ) {
        return $block_template;
    }
    $slug    = substr( $id, strlen( TR_HEADLESS_THEME . '//' ) );
    $titles  = tr_headless_templates();
    if ( ! isset( $titles[ $slug ] ) || $slug === '' ) {
        return $block_template;
    }
    $tpl = tr_build_headless_block_template( $slug, $titles[ $slug ] );
    return $tpl ?: $block_template;
}, 10, 3 );

// ─────────────────────────────────────────────────────────────
// 2. FALLBACK TRACK — `_headless_template` meta
// ─────────────────────────────────────────────────────────────

add_action( 'init', function () {
    register_post_meta( 'page', '_headless_template', array(
        'type'              => 'string',
        'description'       => 'Headless frontend template slug (legacy fallback). Prefer the native template picker.',
        'single'            => true,
        'default'           => '',
        'show_in_rest'      => true,
        'sanitize_callback' => function ( $value ) {
            $value   = is_string( $value ) ? sanitize_text_field( $value ) : '';
            $allowed = array_keys( tr_headless_templates() );
            return in_array( $value, $allowed, true ) ? $value : '';
        },
        // Underscore-prefixed meta is private by default; explicit
        // auth_callback opens it to REST/GraphQL for users who can
        // edit the page.
        'auth_callback'     => function ( $allowed, $meta_key, $post_id ) {
            return current_user_can( 'edit_post', $post_id );
        },
    ) );
} );

// ─────────────────────────────────────────────────────────────
// REST: flat `headless_template` field on /wp/v2/pages
//       (resolved from native picker + meta fallback).
// ─────────────────────────────────────────────────────────────

add_action( 'rest_api_init', function () {
    register_rest_field( 'page', 'headless_template', array(
        'get_callback'    => function ( $post ) {
            return tr_resolve_headless_template_slug( $post['id'] );
        },
        'update_callback' => function ( $value, $post ) {
            $allowed = array_keys( tr_headless_templates() );
            $value   = is_string( $value ) ? sanitize_text_field( $value ) : '';
            if ( ! in_array( $value, $allowed, true ) ) {
                $value = '';
            }
            // Write to meta (legacy field).
            update_post_meta( $post->ID, '_headless_template', $value );
            // Also write the native page_template field with our namespace
            // so the native picker stays in sync.
            $native = ( $value === '' ) ? '' : ( TR_HEADLESS_THEME . '//' . $value );
            update_post_meta( $post->ID, '_wp_page_template', $native );
            return true;
        },
        'schema'          => array(
            'type'        => 'string',
            'description' => 'Headless frontend template slug (e.g. template-homepage). Resolved from the native picker first, meta fallback second.',
            'context'     => array( 'view', 'edit' ),
        ),
    ) );
} );

// Mirror native picker → legacy meta whenever a page is saved, so the old
// meta-driven path keeps working and snippet 17's ACF location rules
// (which read get_page_template_slug) and the legacy meta stay in sync.
add_action( 'save_post_page', function ( $post_id, $post, $update ) {
    if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
        return;
    }
    $resolved = tr_resolve_headless_template_slug( $post_id );
    update_post_meta( $post_id, '_headless_template', $resolved );
}, 20, 3 );

// ─────────────────────────────────────────────────────────────
// WPGraphQL: `Page.headlessTemplate` field
// ─────────────────────────────────────────────────────────────

add_action( 'graphql_register_types', function () {
    if ( ! function_exists( 'register_graphql_field' ) ) {
        return;
    }
    register_graphql_field( 'Page', 'headlessTemplate', array(
        'type'        => 'String',
        'description' => 'Headless frontend template slug (e.g. template-homepage).',
        'resolve'     => function ( $page ) {
            $id = is_object( $page ) && isset( $page->ID ) ? $page->ID
                : ( is_array( $page ) ? ( $page['ID'] ?? null ) : null );
            if ( ! $id ) {
                return '';
            }
            return tr_resolve_headless_template_slug( $id );
        },
    ) );
} );

// ─────────────────────────────────────────────────────────────
// Gutenberg sidebar panel — kept as a backup for editors who
// prefer a dropdown over the native modal. Writes to the legacy
// meta field, which the resolver also consults.
// ─────────────────────────────────────────────────────────────

add_action( 'enqueue_block_editor_assets', function () {
    $screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;
    if ( $screen && isset( $screen->post_type ) && $screen->post_type !== 'page' ) {
        return;
    }

    $templates = tr_headless_templates();
    $options   = array();
    foreach ( $templates as $value => $label ) {
        $options[] = array( 'value' => $value, 'label' => $label );
    }
    $options_json = wp_json_encode( $options );

    $js = <<<JS
( function( wp ) {
    if ( ! wp || ! wp.plugins || ! wp.editPost || ! wp.element || ! wp.components || ! wp.data ) {
        return;
    }
    var el                          = wp.element.createElement;
    var registerPlugin              = wp.plugins.registerPlugin;
    var PluginDocumentSettingPanel  = wp.editPost.PluginDocumentSettingPanel;
    var SelectControl               = wp.components.SelectControl;
    var useSelect                   = wp.data.useSelect;
    var useDispatch                 = wp.data.useDispatch;

    var TEMPLATES = {$options_json};
    var META_KEY  = '_headless_template';

    function HeadlessTemplatePanel() {
        var postType = useSelect( function( select ) {
            return select( 'core/editor' ).getCurrentPostType();
        }, [] );

        if ( postType !== 'page' ) {
            return null;
        }

        var meta = useSelect( function( select ) {
            return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
        }, [] );
        var current = meta[ META_KEY ] || '';

        var editPost = useDispatch( 'core/editor' ).editPost;

        return el(
            PluginDocumentSettingPanel,
            {
                name:      'tr-headless-template',
                title:     'Headless Template (legacy)',
                className: 'tr-headless-template-panel',
                icon:      'layout'
            },
            el( 'p', { style: { marginTop: 0, color: '#666' } },
                'Optional fallback. Prefer the native "Template" picker above — it now includes all headless templates.'
            ),
            el( SelectControl, {
                label:    'Template (fallback)',
                value:    current,
                options:  TEMPLATES,
                onChange: function( value ) {
                    var update = {};
                    update[ META_KEY ] = value;
                    editPost( { meta: update } );
                }
            } )
        );
    }

    registerPlugin( 'tr-headless-template', { render: HeadlessTemplatePanel } );
} )( window.wp );
JS;

    wp_add_inline_script( 'wp-edit-post', $js );
} );
