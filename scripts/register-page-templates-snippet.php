<?php
/**
 * Register Page Templates — Tenth Rock Headless WordPress
 *
 * Code Snippets Plugin Snippet ID: 6
 *
 * Registers the headless page-template system used by the Next.js frontend.
 *
 * Approach:
 *   - A `_headless_template` post-meta on the `page` post type stores the
 *     selected template slug (e.g. `template-homepage`).
 *   - A custom Gutenberg sidebar panel ("Headless Template") under
 *     Document Settings lets editors choose the template from a dropdown.
 *   - The meta is exposed via REST (root field `headless_template`) and
 *     via WPGraphQL (`Page.headlessTemplate`) so the frontend can route
 *     each page to the correct Next.js template component.
 *
 * Why custom meta instead of WP's native `page_template`:
 *   The native `page_template` field requires actual PHP template files
 *   in the active theme. In a headless setup the frontend renders the
 *   templates, so we use a parallel meta field that block themes
 *   (Twenty Twenty-Five, etc.) cannot interfere with.
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

// ─────────────────────────────────────────────────────────────
// Register `_headless_template` post meta on `page`
// ─────────────────────────────────────────────────────────────

add_action( 'init', function () {
    register_post_meta( 'page', '_headless_template', array(
        'type'              => 'string',
        'description'       => 'Headless frontend template slug (e.g. template-homepage). Empty = no template.',
        'single'            => true,
        'default'           => '',
        'show_in_rest'      => true,
        'sanitize_callback' => function ( $value ) {
            $value = is_string( $value ) ? sanitize_text_field( $value ) : '';
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
// Expose the meta as a flat REST field on /wp/v2/pages so the
// frontend doesn't have to read it out of the `meta` envelope.
// ─────────────────────────────────────────────────────────────

add_action( 'rest_api_init', function () {
    register_rest_field( 'page', 'headless_template', array(
        'get_callback'    => function ( $post ) {
            $val = get_post_meta( $post['id'], '_headless_template', true );
            return is_string( $val ) ? $val : '';
        },
        'update_callback' => function ( $value, $post ) {
            $allowed = array_keys( tr_headless_templates() );
            $value   = is_string( $value ) ? sanitize_text_field( $value ) : '';
            if ( ! in_array( $value, $allowed, true ) ) {
                $value = '';
            }
            update_post_meta( $post->ID, '_headless_template', $value );
            return true;
        },
        'schema'          => array(
            'type'        => 'string',
            'description' => 'Headless frontend template slug.',
            'context'     => array( 'view', 'edit' ),
        ),
    ) );
} );

// ─────────────────────────────────────────────────────────────
// Expose the meta on the WPGraphQL `Page` type as `headlessTemplate`
// ─────────────────────────────────────────────────────────────

add_action( 'graphql_register_types', function () {
    if ( ! function_exists( 'register_graphql_field' ) ) {
        return;
    }
    register_graphql_field( 'Page', 'headlessTemplate', array(
        'type'        => 'String',
        'description' => 'Headless frontend template slug (e.g. template-homepage).',
        'resolve'     => function ( $page ) {
            $id = is_object( $page ) && isset( $page->ID ) ? $page->ID : ( is_array( $page ) ? ( $page['ID'] ?? null ) : null );
            if ( ! $id ) {
                return '';
            }
            $val = get_post_meta( $id, '_headless_template', true );
            return is_string( $val ) ? $val : '';
        },
    ) );
} );

// ─────────────────────────────────────────────────────────────
// Gutenberg sidebar panel: "Headless Template" dropdown
// Renders under Document Settings whenever editing a Page.
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
                title:     'Headless Template',
                className: 'tr-headless-template-panel',
                icon:      'layout'
            },
            el( 'p', { style: { marginTop: 0, color: '#666' } },
                'Choose which Next.js template renders this page on the headless frontend.'
            ),
            el( SelectControl, {
                label:    'Template',
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
