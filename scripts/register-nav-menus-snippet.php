<?php
/**
 * Tenth Rock — Register Nav Menu Locations + Headless REST Endpoint
 *
 * 1. Registers 8 nav menu locations so editors can manage them in
 *    Appearance → Menus and assign menus to each spot:
 *      - primary             — desktop nav + mobile hamburger (hierarchical)
 *      - header-ctas         — header right-side buttons (Login, Request A Service)
 *      - locations-dropdown  — 48 US states under "Locations"
 *      - footer-services     — footer column 2
 *      - footer-industries   — footer column 3
 *      - footer-company      — footer column 4
 *      - footer-legal        — footer bottom bar
 *      - footer-social       — footer brand column social icons
 *
 * 2. Exposes a public REST endpoint:
 *      GET /wp-json/headless/v1/menus/<location>
 *    Returns a flat array of menu items with parent linkage:
 *      [{ id, parent, label, url, target, classes, order }, ...]
 *    The frontend builds the tree itself.
 *
 * 3. Pings the Next.js revalidate endpoint on menu updates so changes
 *    appear on the frontend within seconds (uses the TR_REVALIDATE_URLS
 *    and TR_REVALIDATE_SECRET constants defined by the existing
 *    revalidate-on-save snippet — no-op if those aren't set).
 */

if ( ! defined( 'ABSPATH' ) ) {
    return;
}

// ─────────────────────────────────────────────────────────────
// 1) Register the 8 menu locations
// ─────────────────────────────────────────────────────────────
add_action( 'after_setup_theme', function () {
    register_nav_menus( array(
        'primary'             => __( 'Primary Navigation (header + mobile)', 'tenthrock' ),
        'header-ctas'         => __( 'Header CTAs (right-side buttons)', 'tenthrock' ),
        'locations-dropdown'  => __( 'Locations Dropdown (48 states)', 'tenthrock' ),
        'footer-services'     => __( 'Footer — Services', 'tenthrock' ),
        'footer-industries'   => __( 'Footer — Industries', 'tenthrock' ),
        'footer-company'      => __( 'Footer — Company', 'tenthrock' ),
        'footer-legal'        => __( 'Footer — Legal', 'tenthrock' ),
        'footer-social'       => __( 'Footer — Social', 'tenthrock' ),
    ) );
}, 5 );

// ─────────────────────────────────────────────────────────────
// 2) REST endpoint: /wp-json/headless/v1/menus/<location>
// ─────────────────────────────────────────────────────────────
add_action( 'rest_api_init', function () {
    register_rest_route( 'headless/v1', '/menus/(?P<location>[a-zA-Z0-9_-]+)', array(
        'methods'             => 'GET',
        'permission_callback' => '__return_true',
        'callback'            => 'tr_rest_get_menu_by_location',
        'args'                => array(
            'location' => array( 'required' => true, 'type' => 'string' ),
        ),
    ) );

    // Assign a menu to a registered location.
    // Body: { menu_id: int, location: string }
    register_rest_route( 'headless/v1', '/assign-menu', array(
        'methods'             => 'POST',
        'permission_callback' => function () { return current_user_can( 'edit_theme_options' ); },
        'callback'            => function ( WP_REST_Request $req ) {
            $menu_id  = (int) $req->get_param( 'menu_id' );
            $location = (string) $req->get_param( 'location' );
            $registered = get_registered_nav_menus();
            if ( ! isset( $registered[ $location ] ) ) {
                return new WP_Error( 'invalid_location', "Unknown location '$location'", array( 'status' => 400 ) );
            }
            $stylesheet = get_option( 'stylesheet' );
            $mods       = get_option( "theme_mods_$stylesheet", array() );
            if ( ! is_array( $mods ) ) { $mods = array(); }
            if ( ! isset( $mods['nav_menu_locations'] ) || ! is_array( $mods['nav_menu_locations'] ) ) {
                $mods['nav_menu_locations'] = array();
            }
            $mods['nav_menu_locations'][ $location ] = $menu_id;
            update_option( "theme_mods_$stylesheet", $mods );
            return rest_ensure_response( array( 'ok' => true, 'location' => $location, 'menu_id' => $menu_id ) );
        },
    ) );

    // Convenience: list all registered locations + their assigned menus
    register_rest_route( 'headless/v1', '/menus', array(
        'methods'             => 'GET',
        'permission_callback' => '__return_true',
        'callback'            => function () {
            $locations = get_nav_menu_locations();
            $registered = get_registered_nav_menus();
            $out = array();
            foreach ( $registered as $loc => $label ) {
                $menu_id = isset( $locations[ $loc ] ) ? (int) $locations[ $loc ] : 0;
                $menu    = $menu_id ? wp_get_nav_menu_object( $menu_id ) : null;
                $out[]   = array(
                    'location'  => $loc,
                    'label'     => $label,
                    'menu_id'   => $menu_id,
                    'menu_name' => $menu ? $menu->name : null,
                );
            }
            return rest_ensure_response( $out );
        },
    ) );
} );

function tr_rest_get_menu_by_location( WP_REST_Request $request ) {
    $location = $request->get_param( 'location' );
    $locations = get_nav_menu_locations();

    if ( ! isset( $locations[ $location ] ) || ! $locations[ $location ] ) {
        return new WP_REST_Response( array(
            'location' => $location,
            'items'    => array(),
            'note'     => 'No menu assigned to this location.',
        ), 200 );
    }

    $menu_id = (int) $locations[ $location ];
    $items   = wp_get_nav_menu_items( $menu_id, array( 'update_post_term_cache' => false ) );
    if ( ! is_array( $items ) ) {
        return new WP_REST_Response( array( 'location' => $location, 'items' => array() ), 200 );
    }

    // The site URL prefix we need to strip so the frontend gets relative paths.
    // Editors usually link via "Pages" picker which gives full WP URLs, but the
    // headless frontend serves at a different host — we want relative URLs.
    $site_host = wp_parse_url( home_url( '/' ), PHP_URL_HOST );

    $out = array();
    foreach ( $items as $item ) {
        $url = (string) $item->url;

        // Convert absolute same-host URLs to relative paths.
        $parsed = wp_parse_url( $url );
        if ( is_array( $parsed ) && isset( $parsed['host'] ) && $parsed['host'] === $site_host ) {
            $url = isset( $parsed['path'] ) ? $parsed['path'] : '/';
            if ( ! empty( $parsed['query'] ) )    { $url .= '?' . $parsed['query']; }
            if ( ! empty( $parsed['fragment'] ) ) { $url .= '#' . $parsed['fragment']; }
        }

        $out[] = array(
            'id'           => (int) $item->ID,
            'parent'       => (int) $item->menu_item_parent,
            'order'        => (int) $item->menu_order,
            'label'        => wp_strip_all_tags( $item->title ),
            'url'          => $url,
            'target'       => (string) $item->target,
            'classes'      => array_values( array_filter( (array) $item->classes ) ),
            'object'       => (string) $item->object,
            'object_id'    => (int) $item->object_id,
        );
    }

    // Ensure menu_order ascending
    usort( $out, function ( $a, $b ) { return $a['order'] - $b['order']; } );

    return new WP_REST_Response( array(
        'location' => $location,
        'menu_id'  => $menu_id,
        'items'    => $out,
    ), 200 );
}

// ─────────────────────────────────────────────────────────────
// 3) Revalidate the headless frontend when menus change.
//    Reuses TR_REVALIDATE_URLS / TR_REVALIDATE_SECRET constants
//    defined by the existing revalidate-on-save snippet. If those
//    aren't defined, this is a silent no-op (safe).
// ─────────────────────────────────────────────────────────────
function tr_revalidate_for_menu_change( $reason ) {
    if ( ! defined( 'TR_REVALIDATE_URLS' ) || ! defined( 'TR_REVALIDATE_SECRET' ) ) {
        return;
    }
    $urls   = json_decode( TR_REVALIDATE_URLS, true );
    $secret = TR_REVALIDATE_SECRET;
    if ( ! is_array( $urls ) || empty( $secret ) ) {
        return;
    }
    $payload = wp_json_encode( array( 'secret' => $secret, 'type' => 'all' ) );
    foreach ( $urls as $base ) {
        $base = rtrim( (string) $base, '/' );
        if ( ! $base ) { continue; }
        wp_remote_post( $base . '/api/revalidate', array(
            'method'    => 'POST',
            'timeout'   => 0.01,
            'blocking'  => false,
            'headers'   => array( 'Content-Type' => 'application/json' ),
            'body'      => $payload,
            'sslverify' => false,
        ) );
    }
    if ( function_exists( 'error_log' ) ) {
        error_log( '[tr-revalidate] menu-change reason=' . $reason . ' targets=' . count( $urls ) );
    }
}

add_action( 'wp_update_nav_menu',           function ( $menu_id ) { tr_revalidate_for_menu_change( 'wp_update_nav_menu:' . (int) $menu_id ); } );
add_action( 'wp_create_nav_menu',           function ( $menu_id ) { tr_revalidate_for_menu_change( 'wp_create_nav_menu:' . (int) $menu_id ); } );
add_action( 'wp_delete_nav_menu',           function ( $menu_id ) { tr_revalidate_for_menu_change( 'wp_delete_nav_menu:' . (int) $menu_id ); } );
add_action( 'update_option_theme_mods_' . get_option( 'stylesheet' ), function () {
    // Fired when nav menu locations are reassigned via the customizer/theme mods.
    tr_revalidate_for_menu_change( 'theme_mods' );
}, 10, 0 );
