<?php
/**
 * Register Custom Taxonomies — Tenth Rock Headless WordPress
 *
 * Code Snippets Plugin Snippet: "Register Custom Taxonomies"
 *
 * Registers the 5 custom taxonomies used by the headless frontend:
 *
 *   testimonial_context  → tr_testimonial   (where the testimonial is shown)
 *   case_study_industry  → tr_case_study    (industry the case study belongs to)
 *   faq_category         → tr_faq           (category — used by FAQ page tabs)
 *   faq_context          → tr_faq           (which page/context shows the FAQ)
 *   service_region       → tr_service, tr_location  (regional grouping)
 *
 * All taxonomies are admin-only (not publicly queryable as URLs) and exposed
 * via WPGraphQL with the singular/plural names the frontend GraphQL queries
 * depend on (e.g. `faqCategories { nodes { slug name description } }`).
 */

if ( ! defined( 'ABSPATH' ) ) {
    return;
}

if ( ! function_exists( 'tr_tax_labels' ) ) {
    function tr_tax_labels( $singular, $plural ) {
        return array(
            'name'                       => $plural,
            'singular_name'              => $singular,
            'menu_name'                  => $plural,
            'all_items'                  => 'All ' . $plural,
            'edit_item'                  => 'Edit ' . $singular,
            'view_item'                  => 'View ' . $singular,
            'update_item'                => 'Update ' . $singular,
            'add_new_item'               => 'Add New ' . $singular,
            'new_item_name'              => 'New ' . $singular . ' Name',
            'parent_item'                => 'Parent ' . $singular,
            'parent_item_colon'          => 'Parent ' . $singular . ':',
            'search_items'               => 'Search ' . $plural,
            'popular_items'              => 'Popular ' . $plural,
            'separate_items_with_commas' => 'Separate ' . strtolower( $plural ) . ' with commas',
            'add_or_remove_items'        => 'Add or remove ' . strtolower( $plural ),
            'choose_from_most_used'      => 'Choose from the most used ' . strtolower( $plural ),
            'not_found'                  => 'No ' . strtolower( $plural ) . ' found.',
            'back_to_items'              => '← Back to ' . $plural,
        );
    }
}

add_action( 'init', function () {

    // testimonial_context → tr_testimonial
    register_taxonomy( 'testimonial_context', array( 'tr_testimonial' ), array(
        'labels'              => tr_tax_labels( 'Context', 'Contexts' ),
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_admin_column'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'TestimonialContext',
        'graphql_plural_name' => 'TestimonialContexts',
        'hierarchical'        => true,
        'rewrite'             => false,
        'query_var'           => false,
    ) );

    // case_study_industry → tr_case_study
    register_taxonomy( 'case_study_industry', array( 'tr_case_study' ), array(
        'labels'              => tr_tax_labels( 'Industry', 'Industries' ),
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_admin_column'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'CaseStudyIndustry',
        'graphql_plural_name' => 'CaseStudyIndustries',
        'hierarchical'        => true,
        'rewrite'             => false,
        'query_var'           => false,
    ) );

    // faq_category → tr_faq  (frontend FAQ page tabs)
    register_taxonomy( 'faq_category', array( 'tr_faq' ), array(
        'labels'              => tr_tax_labels( 'FAQ Category', 'FAQ Categories' ),
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_admin_column'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'FaqCategory',
        'graphql_plural_name' => 'FaqCategories',
        'hierarchical'        => true,
        'rewrite'             => false,
        'query_var'           => false,
    ) );

    // faq_context → tr_faq  (which page shows the FAQ in context)
    register_taxonomy( 'faq_context', array( 'tr_faq' ), array(
        'labels'              => tr_tax_labels( 'FAQ Context', 'FAQ Contexts' ),
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_admin_column'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'FaqContext',
        'graphql_plural_name' => 'FaqContexts',
        'hierarchical'        => true,
        'rewrite'             => false,
        'query_var'           => false,
    ) );

    // service_region → tr_service + tr_location
    register_taxonomy( 'service_region', array( 'tr_service', 'tr_location' ), array(
        'labels'              => tr_tax_labels( 'Service Region', 'Service Regions' ),
        'public'              => false,
        'publicly_queryable'  => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => false,
        'show_admin_column'   => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'ServiceRegion',
        'graphql_plural_name' => 'ServiceRegions',
        'hierarchical'        => true,
        'rewrite'             => false,
        'query_var'           => false,
    ) );
}, 0 );
