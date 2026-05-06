<?php
/**
 * Register CPT ACF Field Groups — Tenth Rock Headless WordPress
 *
 * Code Snippets Plugin Snippet: "Register CPT ACF Field Groups"
 *
 * Registers ACF Pro field groups for all 7 custom post types so the
 * Next.js frontend can read structured fields via the WPGraphQL for ACF
 * extension. Field group + field GraphQL names are pinned explicitly to
 * match the queries in lib/wordpress.ts.
 *
 *   tr_service       → serviceFields
 *   tr_industry      → industryFields
 *   tr_location      → locationFields
 *   tr_testimonial   → testimonialFields
 *   tr_case_study    → caseStudyFields
 *   tr_faq           → faqFields
 *   tr_partner_logo  → partnerLogoFields
 *
 * IMPORTANT: All image fields use 'text' type (URL paths) per the
 * project convention — see replit.md.
 */

if ( ! defined( 'ABSPATH' ) ) {
    return;
}

// ─────────────────────────────────────────────────────────────
// Field-builder helpers
// ─────────────────────────────────────────────────────────────

/** Generic ACF field with explicit GraphQL exposure. */
if ( ! function_exists( 'tr_acf_field' ) ) {
    function tr_acf_field( $key, $name, $label, $type = 'text', $extra = array() ) {
        $base = array(
            'key'                => $key,
            'label'              => $label,
            'name'               => $name,
            'type'               => $type,
            'instructions'       => '',
            'required'           => 0,
            'conditional_logic'  => 0,
            'show_in_graphql'    => 1,
            'show_in_rest'       => 1,
            'graphql_field_name' => tr_acf_to_camel( $name ),
        );
        if ( $type === 'textarea' ) {
            $base['rows']         = 4;
            $base['new_lines']    = '';
        }
        if ( $type === 'wysiwyg' ) {
            $base['tabs']         = 'all';
            $base['toolbar']      = 'full';
            $base['media_upload'] = 1;
        }
        if ( $type === 'number' ) {
            $base['min'] = '';
            $base['max'] = '';
            $base['step'] = '';
        }
        return array_merge( $base, $extra );
    }
}

/** Convert snake_case to camelCase (matches WPGraphQL for ACF default). */
if ( ! function_exists( 'tr_acf_to_camel' ) ) {
    function tr_acf_to_camel( $name ) {
        $parts = explode( '_', $name );
        $out   = array_shift( $parts );
        foreach ( $parts as $p ) {
            $out .= ucfirst( $p );
        }
        return $out;
    }
}

/** Build a repeater field with sub_fields. */
if ( ! function_exists( 'tr_acf_repeater' ) ) {
    function tr_acf_repeater( $key, $name, $label, $sub_fields, $extra = array() ) {
        return array_merge( array(
            'key'                => $key,
            'label'              => $label,
            'name'               => $name,
            'type'               => 'repeater',
            'instructions'       => '',
            'required'           => 0,
            'conditional_logic'  => 0,
            'show_in_graphql'    => 1,
            'show_in_rest'       => 1,
            'graphql_field_name' => tr_acf_to_camel( $name ),
            'collapsed'          => '',
            'min'                => 0,
            'max'                => 0,
            'layout'             => 'block',
            'button_label'       => 'Add Row',
            'sub_fields'         => $sub_fields,
        ), $extra );
    }
}

/** Build the full field-group array with single-CPT location rule. */
if ( ! function_exists( 'tr_acf_group' ) ) {
    function tr_acf_group( $key, $title, $cpt, $graphql_field_name, $graphql_type, $fields ) {
        return array(
            'key'                   => $key,
            'title'                 => $title,
            'fields'                => $fields,
            'location'              => array(
                array(
                    array( 'param' => 'post_type', 'operator' => '==', 'value' => $cpt ),
                ),
            ),
            'menu_order'            => 0,
            'position'              => 'normal',
            'style'                 => 'default',
            'label_placement'       => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen'        => '',
            'active'                => true,
            'description'           => '',
            'show_in_graphql'       => 1,
            'show_in_rest'          => 1,
            'graphql_field_name'    => $graphql_field_name,
            'map_graphql_types_from_location_rules' => 0,
            'graphql_types'         => array( $graphql_type ),
        );
    }
}

// ─────────────────────────────────────────────────────────────
// Register all field groups on acf/init
// ─────────────────────────────────────────────────────────────

add_action( 'acf/init', function () {

    if ( ! function_exists( 'acf_add_local_field_group' ) ) {
        return;
    }

    // ═══════════════════════════════════════════════════════
    // tr_service → serviceFields  (Service type)
    // ═══════════════════════════════════════════════════════
    acf_add_local_field_group( tr_acf_group(
        'group_tr_service',
        'Service Fields',
        'tr_service',
        'serviceFields',
        'Service',
        array(
            tr_acf_field( 'field_svc_hero_title',         'hero_title',          'Hero Title' ),
            tr_acf_field( 'field_svc_hero_description',   'hero_description',    'Hero Description', 'textarea' ),
            tr_acf_field( 'field_svc_hero_image',         'hero_image',          'Hero Image (URL)' ),
            tr_acf_field( 'field_svc_about_description',  'about_description',   'About Description', 'textarea' ),
            tr_acf_repeater( 'field_svc_about_bullets', 'about_bullets', 'About Bullets', array(
                tr_acf_field( 'field_svc_about_bullets_text', 'bullet_text', 'Bullet Text' ),
            ) ),
            tr_acf_repeater( 'field_svc_sub_services', 'sub_services', 'Sub Services', array(
                tr_acf_field( 'field_svc_sub_title',       'sub_title',       'Title' ),
                tr_acf_field( 'field_svc_sub_description', 'sub_description', 'Description', 'textarea' ),
                tr_acf_field( 'field_svc_sub_image',       'sub_image',       'Image (URL)' ),
                tr_acf_field( 'field_svc_sub_link',        'sub_link',        'Link' ),
                tr_acf_repeater( 'field_svc_sub_features', 'sub_features', 'Features', array(
                    tr_acf_field( 'field_svc_sub_feat_text', 'feature_text', 'Feature Text' ),
                ) ),
            ) ),
            tr_acf_repeater( 'field_svc_faqs', 'faqs', 'FAQs', array(
                tr_acf_field( 'field_svc_faqs_question', 'question', 'Question' ),
                tr_acf_field( 'field_svc_faqs_answer',   'answer',   'Answer', 'textarea' ),
            ) ),
            tr_acf_repeater( 'field_svc_process_steps', 'process_steps', 'Process Steps', array(
                tr_acf_field( 'field_svc_step_num',   'step_num',   'Step Number' ),
                tr_acf_field( 'field_svc_step_title', 'step_title', 'Step Title' ),
                tr_acf_field( 'field_svc_step_desc',  'step_desc',  'Step Description', 'textarea' ),
            ) ),
            tr_acf_field( 'field_svc_process_subtitle', 'process_subtitle', 'Process Subtitle', 'textarea' ),
            tr_acf_repeater( 'field_svc_stats', 'stats', 'Stats', array(
                tr_acf_field( 'field_svc_stat_value',       'stat_value',       'Value' ),
                tr_acf_field( 'field_svc_stat_label',       'stat_label',       'Label' ),
                tr_acf_field( 'field_svc_stat_description', 'stat_description', 'Description', 'textarea' ),
            ) ),
            // Paragraph section 1
            tr_acf_field( 'field_svc_para1_badge',     'para1_badge',     'Paragraph 1 — Badge' ),
            tr_acf_field( 'field_svc_para1_heading',   'para1_heading',   'Paragraph 1 — Heading' ),
            tr_acf_field( 'field_svc_para1_body',      'para1_body',      'Paragraph 1 — Body', 'textarea' ),
            tr_acf_field( 'field_svc_para1_image',     'para1_image',     'Paragraph 1 — Image (URL)' ),
            tr_acf_field( 'field_svc_para1_image_alt', 'para1_image_alt', 'Paragraph 1 — Image Alt' ),
            tr_acf_repeater( 'field_svc_para1_bullets', 'para1_bullets', 'Paragraph 1 — Bullets', array(
                tr_acf_field( 'field_svc_para1_bullets_text', 'bullet_text', 'Bullet Text' ),
            ) ),
            // Paragraph section 2
            tr_acf_field( 'field_svc_para2_badge',     'para2_badge',     'Paragraph 2 — Badge' ),
            tr_acf_field( 'field_svc_para2_heading',   'para2_heading',   'Paragraph 2 — Heading' ),
            tr_acf_field( 'field_svc_para2_body',      'para2_body',      'Paragraph 2 — Body', 'textarea' ),
            tr_acf_field( 'field_svc_para2_image',     'para2_image',     'Paragraph 2 — Image (URL)' ),
            tr_acf_field( 'field_svc_para2_image_alt', 'para2_image_alt', 'Paragraph 2 — Image Alt' ),
            tr_acf_repeater( 'field_svc_para2_bullets', 'para2_bullets', 'Paragraph 2 — Bullets', array(
                tr_acf_field( 'field_svc_para2_bullets_text', 'bullet_text', 'Bullet Text' ),
            ) ),
            tr_acf_field( 'field_svc_how_intro', 'how_it_works_intro', 'How-It-Works Intro', 'textarea' ),
            tr_acf_repeater( 'field_svc_how_steps', 'how_it_works_steps', 'How-It-Works Steps', array(
                tr_acf_field( 'field_svc_how_step_title', 'step_title', 'Title' ),
                tr_acf_field( 'field_svc_how_step_desc',  'step_desc',  'Description', 'textarea' ),
            ) ),
            tr_acf_field( 'field_svc_cta_image',     'cta_image',     'CTA Image (URL)' ),
            tr_acf_field( 'field_svc_cta_image_alt', 'cta_image_alt', 'CTA Image Alt' ),
        )
    ) );

    // ═══════════════════════════════════════════════════════
    // tr_industry → industryFields  (Industry type)
    // ═══════════════════════════════════════════════════════
    acf_add_local_field_group( tr_acf_group(
        'group_tr_industry',
        'Industry Fields',
        'tr_industry',
        'industryFields',
        'Industry',
        array(
            tr_acf_field( 'field_ind_hero_description', 'hero_description', 'Hero Description', 'textarea' ),
            tr_acf_field( 'field_ind_hero_image',       'hero_image',       'Hero Image (URL)' ),
            tr_acf_field( 'field_ind_about_title',      'about_title',      'About Title' ),
            tr_acf_field( 'field_ind_about_image',      'about_image',      'About Image (URL)' ),
            tr_acf_repeater( 'field_ind_about_bullets', 'about_bullets', 'About Bullets', array(
                tr_acf_field( 'field_ind_about_bullets_title', 'bullet_title',       'Title' ),
                tr_acf_field( 'field_ind_about_bullets_desc',  'bullet_description', 'Description', 'textarea' ),
            ) ),
            tr_acf_repeater( 'field_ind_faqs', 'faqs', 'FAQs', array(
                tr_acf_field( 'field_ind_faqs_question', 'question', 'Question' ),
                tr_acf_field( 'field_ind_faqs_answer',   'answer',   'Answer', 'textarea' ),
            ) ),
            // Paragraph section 1
            tr_acf_field( 'field_ind_para1_badge',     'para1_badge',     'Paragraph 1 — Badge' ),
            tr_acf_field( 'field_ind_para1_heading',   'para1_heading',   'Paragraph 1 — Heading' ),
            tr_acf_field( 'field_ind_para1_body',      'para1_body',      'Paragraph 1 — Body', 'textarea' ),
            tr_acf_field( 'field_ind_para1_image',     'para1_image',     'Paragraph 1 — Image (URL)' ),
            tr_acf_field( 'field_ind_para1_image_alt', 'para1_image_alt', 'Paragraph 1 — Image Alt' ),
            tr_acf_repeater( 'field_ind_para1_bullets', 'para1_bullets', 'Paragraph 1 — Bullets', array(
                tr_acf_field( 'field_ind_para1_bullets_text', 'bullet_text', 'Bullet Text' ),
            ) ),
            // Paragraph section 2
            tr_acf_field( 'field_ind_para2_badge',     'para2_badge',     'Paragraph 2 — Badge' ),
            tr_acf_field( 'field_ind_para2_heading',   'para2_heading',   'Paragraph 2 — Heading' ),
            tr_acf_field( 'field_ind_para2_body',      'para2_body',      'Paragraph 2 — Body', 'textarea' ),
            tr_acf_field( 'field_ind_para2_image',     'para2_image',     'Paragraph 2 — Image (URL)' ),
            tr_acf_field( 'field_ind_para2_image_alt', 'para2_image_alt', 'Paragraph 2 — Image Alt' ),
            tr_acf_repeater( 'field_ind_para2_bullets', 'para2_bullets', 'Paragraph 2 — Bullets', array(
                tr_acf_field( 'field_ind_para2_bullets_text', 'bullet_text', 'Bullet Text' ),
            ) ),
            // Paragraph section 3
            tr_acf_field( 'field_ind_para3_badge',     'para3_badge',     'Paragraph 3 — Badge' ),
            tr_acf_field( 'field_ind_para3_heading',   'para3_heading',   'Paragraph 3 — Heading' ),
            tr_acf_field( 'field_ind_para3_body',      'para3_body',      'Paragraph 3 — Body', 'textarea' ),
            tr_acf_field( 'field_ind_para3_image',     'para3_image',     'Paragraph 3 — Image (URL)' ),
            tr_acf_field( 'field_ind_para3_image_alt', 'para3_image_alt', 'Paragraph 3 — Image Alt' ),
            tr_acf_repeater( 'field_ind_para3_bullets', 'para3_bullets', 'Paragraph 3 — Bullets', array(
                tr_acf_field( 'field_ind_para3_bullets_text', 'bullet_text', 'Bullet Text' ),
            ) ),
        )
    ) );

    // ═══════════════════════════════════════════════════════
    // tr_location → locationFields  (Location type)
    // ═══════════════════════════════════════════════════════
    acf_add_local_field_group( tr_acf_group(
        'group_tr_location',
        'Location Fields',
        'tr_location',
        'locationFields',
        'Location',
        array(
            tr_acf_field( 'field_loc_hero_subtitle',       'hero_subtitle',       'Hero Subtitle' ),
            tr_acf_field( 'field_loc_hero_image',          'hero_image',          'Hero Image (URL)' ),
            tr_acf_field( 'field_loc_about_description',   'about_description',   'About Description', 'textarea' ),
            tr_acf_repeater( 'field_loc_about_bullets', 'about_bullets', 'About Bullets', array(
                tr_acf_field( 'field_loc_about_bullets_text', 'bullet_text', 'Bullet Text' ),
            ) ),
            tr_acf_field( 'field_loc_trusted_description', 'trusted_description', 'Trusted Description', 'textarea' ),
            tr_acf_field( 'field_loc_state_abbreviation',  'state_abbreviation',  'State Abbreviation (e.g. NY)' ),
            tr_acf_repeater( 'field_loc_cities', 'cities', 'Cities', array(
                tr_acf_field( 'field_loc_city_name', 'city_name', 'City Name' ),
            ) ),
            tr_acf_repeater( 'field_loc_faqs', 'faqs', 'FAQs', array(
                tr_acf_field( 'field_loc_faqs_question', 'question', 'Question' ),
                tr_acf_field( 'field_loc_faqs_answer',   'answer',   'Answer', 'textarea' ),
            ) ),
        )
    ) );

    // ═══════════════════════════════════════════════════════
    // tr_testimonial → testimonialFields  (Testimonial type)
    // ═══════════════════════════════════════════════════════
    acf_add_local_field_group( tr_acf_group(
        'group_tr_testimonial',
        'Testimonial Fields',
        'tr_testimonial',
        'testimonialFields',
        'Testimonial',
        array(
            tr_acf_field( 'field_tst_quote',        'quote',        'Quote', 'textarea' ),
            tr_acf_field( 'field_tst_author_name',  'author_name',  'Author Name' ),
            tr_acf_field( 'field_tst_author_role',  'author_role',  'Author Role / Title' ),
            tr_acf_field( 'field_tst_company',      'company',      'Company' ),
            tr_acf_field( 'field_tst_author_image', 'author_image', 'Author Image (URL)' ),
        )
    ) );

    // ═══════════════════════════════════════════════════════
    // tr_case_study → caseStudyFields  (CaseStudy type)
    // ═══════════════════════════════════════════════════════
    acf_add_local_field_group( tr_acf_group(
        'group_tr_case_study',
        'Case Study Fields',
        'tr_case_study',
        'caseStudyFields',
        'CaseStudy',
        array(
            tr_acf_field( 'field_cs_subtitle',        'subtitle',        'Subtitle' ),
            tr_acf_field( 'field_cs_tag',             'tag',             'Tag (e.g. Healthcare)' ),
            tr_acf_field( 'field_cs_description',     'description',     'Description', 'textarea' ),
            tr_acf_field( 'field_cs_main_image',      'main_image',      'Main Image (URL)' ),
            tr_acf_field( 'field_cs_main_image_alt',  'main_image_alt',  'Main Image Alt' ),
            tr_acf_repeater( 'field_cs_thumb_images', 'thumb_images', 'Thumbnail Images', array(
                tr_acf_field( 'field_cs_thumb_image', 'thumb_image', 'Image (URL)' ),
                tr_acf_field( 'field_cs_thumb_alt',   'thumb_alt',   'Alt Text' ),
            ) ),
            tr_acf_repeater( 'field_cs_stats', 'stats', 'Stats', array(
                tr_acf_field( 'field_cs_stat_value', 'stat_value', 'Value' ),
                tr_acf_field( 'field_cs_stat_label', 'stat_label', 'Label' ),
            ) ),
            tr_acf_field( 'field_cs_display_order', 'display_order', 'Display Order', 'number' ),
        )
    ) );

    // ═══════════════════════════════════════════════════════
    // tr_faq → faqFields  (Faq type)
    // Note: the question is the WP post title (not an ACF field).
    // ═══════════════════════════════════════════════════════
    acf_add_local_field_group( tr_acf_group(
        'group_tr_faq',
        'FAQ Fields',
        'tr_faq',
        'faqFields',
        'Faq',
        array(
            tr_acf_field( 'field_faq_answer',        'answer',        'Answer', 'wysiwyg' ),
            tr_acf_field( 'field_faq_display_order', 'display_order', 'Display Order', 'number' ),
        )
    ) );

    // ═══════════════════════════════════════════════════════
    // tr_partner_logo → partnerLogoFields  (PartnerLogo type)
    // ═══════════════════════════════════════════════════════
    acf_add_local_field_group( tr_acf_group(
        'group_tr_partner_logo',
        'Partner Logo Fields',
        'tr_partner_logo',
        'partnerLogoFields',
        'PartnerLogo',
        array(
            tr_acf_field( 'field_plg_logo_image',    'logo_image',    'Logo Image (URL)' ),
            tr_acf_field( 'field_plg_logo_alt',      'logo_alt',      'Alt Text' ),
            tr_acf_field( 'field_plg_display_order', 'display_order', 'Display Order', 'number' ),
        )
    ) );
} );
