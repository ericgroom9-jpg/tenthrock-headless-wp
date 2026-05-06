<?php
/**
 * Register Custom Post Types — Tenth Rock Headless WordPress
 *
 * Code Snippets Plugin Snippet ID: 5
 *
 * Registers 7 custom post types used by the Next.js headless frontend.
 * Single-page CPTs (Services, Industries, Locations) are public, have
 * archives, and expose Yoast SEO. List-only CPTs (Testimonials, Case Studies,
 * FAQs, Partner Logos) are admin-only — editable in the sidebar but not
 * publicly queryable on the WP side; the frontend lists them in aggregated
 * sections. All 7 are exposed via WPGraphQL using the singular/plural names
 * the frontend's GraphQL queries depend on.
 *
 * Frontend route map (lib/config/post-types.ts):
 *   tr_service       → /[slug]
 *   tr_industry      → /[slug]
 *   tr_location      → /locations/[slug]
 *   tr_testimonial   → list-only (no single page)
 *   tr_case_study    → list-only (no single page)
 *   tr_faq           → list-only (no single page)
 *   tr_partner_logo  → list-only (no single page)
 */

if ( ! defined( 'ABSPATH' ) ) {
    return;
}

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

/**
 * Build a full WP labels array from singular/plural display names.
 */
if ( ! function_exists( 'tr_cpt_labels' ) ) {
    function tr_cpt_labels( $singular, $plural ) {
        return array(
            'name'                  => $plural,
            'singular_name'         => $singular,
            'menu_name'             => $plural,
            'name_admin_bar'        => $singular,
            'archives'              => $singular . ' Archives',
            'attributes'            => $singular . ' Attributes',
            'parent_item_colon'     => 'Parent ' . $singular . ':',
            'all_items'             => 'All ' . $plural,
            'add_new_item'          => 'Add New ' . $singular,
            'add_new'               => 'Add New',
            'new_item'              => 'New ' . $singular,
            'edit_item'             => 'Edit ' . $singular,
            'update_item'           => 'Update ' . $singular,
            'view_item'             => 'View ' . $singular,
            'view_items'            => 'View ' . $plural,
            'search_items'          => 'Search ' . $plural,
            'not_found'             => 'No ' . strtolower( $plural ) . ' found.',
            'not_found_in_trash'    => 'No ' . strtolower( $plural ) . ' found in Trash.',
            'featured_image'        => 'Featured Image',
            'set_featured_image'    => 'Set featured image',
            'remove_featured_image' => 'Remove featured image',
            'use_featured_image'    => 'Use as featured image',
            'insert_into_item'      => 'Insert into ' . strtolower( $singular ),
            'uploaded_to_this_item' => 'Uploaded to this ' . strtolower( $singular ),
            'items_list'            => $plural . ' list',
            'items_list_navigation' => $plural . ' list navigation',
            'filter_items_list'     => 'Filter ' . strtolower( $plural ) . ' list',
        );
    }
}

// ─────────────────────────────────────────────────────────────
// Register CPTs
// ─────────────────────────────────────────────────────────────

add_action( 'init', function () {

    // ─── Single-page CPTs (public, archive, Yoast SEO) ───

    // Services → /[slug]
    register_post_type( 'tr_service', array(
        'labels'              => tr_cpt_labels( 'Service', 'Services' ),
        'description'         => 'Tenth Rock service offerings (e.g. recycling, waste removal).',
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'Service',
        'graphql_plural_name' => 'Services',
        'menu_position'       => 20,
        'menu_icon'           => 'dashicons-hammer',
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'custom-fields', 'author', 'page-attributes' ),
        'rewrite'             => array( 'slug' => 'services', 'with_front' => false ),
        'query_var'           => true,
        'exclude_from_search' => false,
        'can_export'          => true,
        'delete_with_user'    => false,
    ) );

    // Industries → /[slug]
    register_post_type( 'tr_industry', array(
        'labels'              => tr_cpt_labels( 'Industry', 'Industries' ),
        'description'         => 'Industries Tenth Rock serves (e.g. healthcare, hospitality).',
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'Industry',
        'graphql_plural_name' => 'Industries',
        'menu_position'       => 21,
        'menu_icon'           => 'dashicons-building',
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'custom-fields', 'author', 'page-attributes' ),
        'rewrite'             => array( 'slug' => 'industries', 'with_front' => false ),
        'query_var'           => true,
        'exclude_from_search' => false,
        'can_export'          => true,
        'delete_with_user'    => false,
    ) );

    // Locations → /locations/[slug]
    register_post_type( 'tr_location', array(
        'labels'              => tr_cpt_labels( 'Location', 'Locations' ),
        'description'         => 'Geographic service areas (states, cities).',
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'Location',
        'graphql_plural_name' => 'Locations',
        'menu_position'       => 22,
        'menu_icon'           => 'dashicons-location-alt',
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'custom-fields', 'author', 'page-attributes' ),
        'rewrite'             => array( 'slug' => 'locations', 'with_front' => false ),
        'query_var'           => true,
        'exclude_from_search' => false,
        'can_export'          => true,
        'delete_with_user'    => false,
    ) );

    // ─── List-only CPTs (admin-only, no public archive) ───

    // Testimonials
    register_post_type( 'tr_testimonial', array(
        'labels'              => tr_cpt_labels( 'Testimonial', 'Testimonials' ),
        'description'         => 'Client testimonials displayed in aggregated sections on the frontend.',
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_in_admin_bar'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'Testimonial',
        'graphql_plural_name' => 'Testimonials',
        'menu_position'       => 25,
        'menu_icon'           => 'dashicons-format-quote',
        'capability_type'     => 'post',
        'has_archive'         => false,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'custom-fields', 'page-attributes' ),
        'rewrite'             => false,
        'query_var'           => false,
        'exclude_from_search' => true,
        'can_export'          => true,
    ) );

    // Case Studies
    register_post_type( 'tr_case_study', array(
        'labels'              => tr_cpt_labels( 'Case Study', 'Case Studies' ),
        'description'         => 'Case studies displayed in aggregated sections on the frontend.',
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_in_admin_bar'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'CaseStudy',
        'graphql_plural_name' => 'CaseStudies',
        'menu_position'       => 26,
        'menu_icon'           => 'dashicons-portfolio',
        'capability_type'     => 'post',
        'has_archive'         => false,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'custom-fields', 'page-attributes' ),
        'rewrite'             => false,
        'query_var'           => false,
        'exclude_from_search' => true,
        'can_export'          => true,
    ) );

    // FAQs
    register_post_type( 'tr_faq', array(
        'labels'              => tr_cpt_labels( 'FAQ', 'FAQs' ),
        'description'         => 'Frequently asked questions, listed on the FAQ page and contextually elsewhere.',
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_in_admin_bar'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'Faq',
        'graphql_plural_name' => 'Faqs',
        'menu_position'       => 27,
        'menu_icon'           => 'dashicons-editor-help',
        'capability_type'     => 'post',
        'has_archive'         => false,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'editor', 'revisions', 'custom-fields', 'page-attributes' ),
        'rewrite'             => false,
        'query_var'           => false,
        'exclude_from_search' => true,
        'can_export'          => true,
    ) );

    // Partner Logos
    register_post_type( 'tr_partner_logo', array(
        'labels'              => tr_cpt_labels( 'Partner Logo', 'Partner Logos' ),
        'description'         => 'Partner / association logos displayed in logo reels on the frontend.',
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_in_admin_bar'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'PartnerLogo',
        'graphql_plural_name' => 'PartnerLogos',
        'menu_position'       => 28,
        'menu_icon'           => 'dashicons-format-image',
        'capability_type'     => 'post',
        'has_archive'         => false,
        'hierarchical'        => false,
        'supports'            => array( 'title', 'thumbnail', 'revisions', 'custom-fields', 'page-attributes' ),
        'rewrite'             => false,
        'query_var'           => false,
        'exclude_from_search' => true,
        'can_export'          => true,
    ) );
}, 0 );

// ─────────────────────────────────────────────────────────────
// Headless permalink rewrite — make WP "View" links match the
// Next.js frontend route map, so previewing a CPT post in the
// admin opens the correct page on the headless frontend.
// ─────────────────────────────────────────────────────────────

add_filter( 'post_type_link', function ( $post_link, $post ) {
    if ( ! $post || empty( $post->post_name ) ) {
        return $post_link;
    }
    switch ( $post->post_type ) {
        case 'tr_service':
        case 'tr_industry':
            return home_url( '/' . $post->post_name . '/' );
        case 'tr_location':
            return home_url( '/locations/' . $post->post_name . '/' );
    }
    return $post_link;
}, 10, 2 );

// ─────────────────────────────────────────────────────────────
// Yoast SEO — explicitly include single-page CPTs and their
// archive pages in Yoast's full SEO suite. Yoast auto-detects
// public CPTs but we make it explicit and force archive support.
// ─────────────────────────────────────────────────────────────

add_filter( 'wpseo_accessible_post_types', function ( $post_types ) {
    foreach ( array( 'tr_service', 'tr_industry', 'tr_location' ) as $pt ) {
        if ( ! in_array( $pt, $post_types, true ) ) {
            $post_types[] = $pt;
        }
    }
    return $post_types;
} );

add_filter( 'wpseo_post_types_have_archive', function ( $post_types ) {
    foreach ( array( 'tr_service', 'tr_industry', 'tr_location' ) as $pt ) {
        if ( ! in_array( $pt, $post_types, true ) ) {
            $post_types[] = $pt;
        }
    }
    return $post_types;
} );
