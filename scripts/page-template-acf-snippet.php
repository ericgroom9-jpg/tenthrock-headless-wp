
/**
 * ACF Page Template Fields + Global Sections Options Page
 * Code Snippets Plugin — Snippet for headless Next.js page templates
 *
 * Registers:
 * 1. Custom ACF location rule for _headless_template post meta
 * 2. ACF Options Page "Global Sections" for shared components
 * 3. Per-template field groups (14 templates)
 * 4. Global section field groups (on the options page)
 */

if ( ! defined( 'ABSPATH' ) ) return;

// ═══════════════════════════════════════════════════════
// PART 1: Custom ACF Location Rule for _headless_template
// ═══════════════════════════════════════════════════════

add_filter( 'acf/location/rule_types', function ( $choices ) {
    $choices['Headless']['headless_template'] = 'Headless Template';
    return $choices;
});

add_filter( 'acf/location/rule_values/headless_template', function ( $choices ) {
    return array(
        'template-homepage'           => 'Homepage',
        'template-about'              => 'About Us',
        'template-commercial-waste'   => 'Commercial Waste Services',
        'template-who-we-serve'       => 'Who We Serve',
        'template-our-process'        => 'Our Process',
        'template-locations'          => 'Where We Serve',
        'template-join-our-network'   => 'Join Our Network',
        'template-faq'                => 'FAQ',
        'template-contact'            => 'Contact',
        'template-request-a-service'  => 'Request A Service',
        'template-book-a-call'        => 'Book A Call',
        'template-thank-you'          => 'Thank You',
        'template-privacy-policy'     => 'Privacy Policy',
        'template-terms-of-service'   => 'Terms of Service',
    );
});

add_filter( 'acf/location/rule_match/headless_template', function ( $match, $rule, $screen ) {
    if ( ! isset( $screen['post_id'] ) ) return $match;
    $tmpl = get_post_meta( $screen['post_id'], '_headless_template', true );
    if ( $rule['operator'] === '==' ) {
        $match = ( $tmpl === $rule['value'] );
    } elseif ( $rule['operator'] === '!=' ) {
        $match = ( $tmpl !== $rule['value'] );
    }
    return $match;
}, 10, 3 );

// ═══════════════════════════════════════════════════════
// PART 2: ACF Options Page
// ═══════════════════════════════════════════════════════

add_action( 'acf/init', function () {
    if ( ! function_exists( 'acf_add_options_page' ) ) return;

    acf_add_options_page( array(
        'page_title'       => 'Global Sections',
        'menu_title'       => 'Global Sections',
        'menu_slug'        => 'tr-global-sections',
        'capability'       => 'edit_posts',
        'redirect'         => false,
        'show_in_graphql'  => true,
        'graphql_field_name' => 'trGlobalSections',
    ));
});

// ═══════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════

function _tr_f( $key, $label, $name, $type = 'text', $extra = array() ) {
    return array_merge( array(
        'key'   => $key,
        'label' => $label,
        'name'  => $name,
        'type'  => $type,
    ), $extra );
}

function _tr_loc_template( $slug ) {
    return array( array( array(
        'param'    => 'headless_template',
        'operator' => '==',
        'value'    => $slug,
    )));
}

function _tr_loc_options() {
    return array( array( array(
        'param'    => 'options_page',
        'operator' => '==',
        'value'    => 'tr-global-sections',
    )));
}

// ═══════════════════════════════════════════════════════
// PART 3: Global Section Field Groups (Options Page)
// ═══════════════════════════════════════════════════════

add_action( 'acf/init', function () {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) return;

    // --- Process Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_process',
        'title'    => 'Global: Process Section',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsProcess',
        'fields'   => array(
            _tr_f( 'field_gs_proc_tagline', 'Tagline', 'process_tagline' ),
            _tr_f( 'field_gs_proc_heading', 'Heading', 'process_heading' ),
            _tr_f( 'field_gs_proc_subtitle', 'Subtitle', 'process_subtitle', 'textarea' ),
            _tr_f( 'field_gs_proc_steps', 'Steps', 'process_steps', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_gs_proc_s_num', 'Number', 'number' ),
                    _tr_f( 'field_gs_proc_s_title', 'Title', 'title' ),
                    _tr_f( 'field_gs_proc_s_desc', 'Description', 'description', 'textarea' ),
                ),
            )),
        ),
    ));

    // --- Stats Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_stats',
        'title'    => 'Global: Stats / Why Clients Call Us',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsStats',
        'fields'   => array(
            _tr_f( 'field_gs_stats_tagline', 'Tagline', 'stats_tagline' ),
            _tr_f( 'field_gs_stats_heading', 'Heading', 'stats_heading' ),
            _tr_f( 'field_gs_stats_subtitle', 'Subtitle', 'stats_subtitle', 'textarea' ),
            _tr_f( 'field_gs_stats_cta_label', 'CTA Label', 'stats_cta_label' ),
            _tr_f( 'field_gs_stats_cta_link', 'CTA Link', 'stats_cta_link' ),
            _tr_f( 'field_gs_stats_phone_label', 'Phone Label', 'stats_phone_label' ),
            _tr_f( 'field_gs_stats_phone_link', 'Phone Link', 'stats_phone_link' ),
            _tr_f( 'field_gs_stats_image', 'Image URL', 'stats_image' ),
            _tr_f( 'field_gs_stats_image_alt', 'Image Alt', 'stats_image_alt' ),
            _tr_f( 'field_gs_stats_cards', 'Stat Cards', 'stats_cards', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_gs_stats_c_title', 'Title', 'title' ),
                    _tr_f( 'field_gs_stats_c_value', 'Value', 'value' ),
                    _tr_f( 'field_gs_stats_c_desc', 'Description', 'description', 'textarea' ),
                ),
            )),
        ),
    ));

    // --- CTA Banner Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_cta_banner',
        'title'    => 'Global: CTA Banner (Zip Code)',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsCtaBanner',
        'fields'   => array(
            _tr_f( 'field_gs_ctab_tagline', 'Tagline', 'cta_banner_tagline' ),
            _tr_f( 'field_gs_ctab_heading', 'Heading', 'cta_banner_heading' ),
            _tr_f( 'field_gs_ctab_subtitle', 'Subtitle', 'cta_banner_subtitle', 'textarea' ),
            _tr_f( 'field_gs_ctab_placeholder', 'Input Placeholder', 'cta_banner_placeholder' ),
            _tr_f( 'field_gs_ctab_button', 'Button Label', 'cta_banner_button' ),
        ),
    ));

    // --- Reasons Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_reasons',
        'title'    => 'Global: Reasons Section',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsReasons',
        'fields'   => array(
            _tr_f( 'field_gs_reas_tagline', 'Tagline', 'reasons_tagline' ),
            _tr_f( 'field_gs_reas_heading', 'Heading', 'reasons_heading' ),
            _tr_f( 'field_gs_reas_subtitle', 'Subtitle', 'reasons_subtitle', 'textarea' ),
            _tr_f( 'field_gs_reas_cta_label', 'CTA Label', 'reasons_cta_label' ),
            _tr_f( 'field_gs_reas_cta_link', 'CTA Link', 'reasons_cta_link' ),
            _tr_f( 'field_gs_reas_features', 'Feature Cards', 'reasons_features', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_gs_reas_f_icon', 'Icon Name (lucide)', 'icon_name' ),
                    _tr_f( 'field_gs_reas_f_title', 'Title', 'title' ),
                    _tr_f( 'field_gs_reas_f_desc', 'Description', 'description', 'textarea' ),
                ),
            )),
        ),
    ));

    // --- Final CTA Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_final_cta',
        'title'    => 'Global: Final CTA Section',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsFinalCta',
        'fields'   => array(
            _tr_f( 'field_gs_fcta_heading', 'Heading', 'final_cta_heading' ),
            _tr_f( 'field_gs_fcta_subtitle', 'Subtitle', 'final_cta_subtitle', 'textarea' ),
            _tr_f( 'field_gs_fcta_label', 'CTA Label', 'final_cta_label' ),
            _tr_f( 'field_gs_fcta_link', 'CTA Link', 'final_cta_link' ),
            _tr_f( 'field_gs_fcta_image', 'Image URL', 'final_cta_image' ),
            _tr_f( 'field_gs_fcta_image_alt', 'Image Alt', 'final_cta_image_alt' ),
            _tr_f( 'field_gs_fcta_phone', 'Phone Label', 'final_cta_phone' ),
            _tr_f( 'field_gs_fcta_phone_link', 'Phone Link', 'final_cta_phone_link' ),
        ),
    ));

    // --- Location / Where to Find Us Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_location',
        'title'    => 'Global: Location / Where to Find Us',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsLocation',
        'fields'   => array(
            _tr_f( 'field_gs_loc_heading', 'Heading', 'location_heading' ),
            _tr_f( 'field_gs_loc_subtitle', 'Subtitle', 'location_subtitle', 'textarea' ),
            _tr_f( 'field_gs_loc_address', 'Address', 'location_address' ),
            _tr_f( 'field_gs_loc_addr_link', 'Address Map Link', 'location_address_link' ),
            _tr_f( 'field_gs_loc_phone_note', 'Phone Note', 'location_phone_note' ),
            _tr_f( 'field_gs_loc_phone', 'Phone', 'location_phone' ),
            _tr_f( 'field_gs_loc_phone_link', 'Phone Link', 'location_phone_link' ),
            _tr_f( 'field_gs_loc_email', 'Email', 'location_email' ),
            _tr_f( 'field_gs_loc_email_link', 'Email Link', 'location_email_link' ),
            _tr_f( 'field_gs_loc_hq_image', 'HQ Image URL', 'location_hq_image' ),
            _tr_f( 'field_gs_loc_hq_img_alt', 'HQ Image Alt', 'location_hq_image_alt' ),
        ),
    ));

    // --- FAQ Section (global defaults) ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_faq',
        'title'    => 'Global: FAQ Section Defaults',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsFaq',
        'fields'   => array(
            _tr_f( 'field_gs_faq_tagline', 'Tagline', 'faq_section_tagline' ),
            _tr_f( 'field_gs_faq_heading', 'Heading', 'faq_section_heading' ),
            _tr_f( 'field_gs_faq_subtitle', 'Subtitle', 'faq_section_subtitle', 'textarea' ),
            _tr_f( 'field_gs_faq_cta_text', 'CTA Text', 'faq_section_cta_text' ),
            _tr_f( 'field_gs_faq_cta_label', 'CTA Label', 'faq_section_cta_label' ),
            _tr_f( 'field_gs_faq_cta_link', 'CTA Link', 'faq_section_cta_link' ),
        ),
    ));

    // --- Who We Help Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_who_help',
        'title'    => 'Global: Who We Help Section',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsWhoHelp',
        'fields'   => array(
            _tr_f( 'field_gs_wh_tagline', 'Tagline', 'who_help_tagline' ),
            _tr_f( 'field_gs_wh_heading', 'Heading', 'who_help_heading' ),
            _tr_f( 'field_gs_wh_subtitle', 'Subtitle', 'who_help_subtitle', 'textarea' ),
        ),
    ));

    // --- Logo Reel Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_logo_reel',
        'title'    => 'Global: Logo Reel Section',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsLogoReel',
        'fields'   => array(
            _tr_f( 'field_gs_lr_headline', 'Headline', 'logo_reel_headline' ),
        ),
    ));

    // --- Testimonials Section ---
    acf_add_local_field_group( array(
        'key'      => 'group_gs_testimonials',
        'title'    => 'Global: Testimonials Section',
        'location' => _tr_loc_options(),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'gsTestimonials',
        'fields'   => array(
            _tr_f( 'field_gs_test_tagline', 'Tagline', 'testimonials_tagline' ),
        ),
    ));

    // ═══════════════════════════════════════════════════════
    // PART 4: Page Template Field Groups
    // ═══════════════════════════════════════════════════════

    // --- HOMEPAGE ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_homepage',
        'title'    => 'Homepage Fields',
        'location' => _tr_loc_template( 'template-homepage' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'homepageFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_hp_hero_tag', 'Hero Tagline', 'hero_tagline' ),
            _tr_f( 'field_pt_hp_hero_head', 'Hero Heading', 'hero_heading' ),
            _tr_f( 'field_pt_hp_hero_sub', 'Hero Subheading', 'hero_subheading', 'textarea' ),
            _tr_f( 'field_pt_hp_hero_vid', 'Hero Video URL', 'hero_video' ),
            _tr_f( 'field_pt_hp_hero_cta', 'Hero CTA Label', 'hero_cta_label' ),
            _tr_f( 'field_pt_hp_hero_cta_lnk', 'Hero CTA Link', 'hero_cta_link' ),
            _tr_f( 'field_pt_hp_hero_sec', 'Hero Secondary Label', 'hero_secondary_label' ),
            _tr_f( 'field_pt_hp_hero_sec_lnk', 'Hero Secondary Link', 'hero_secondary_link' ),
            _tr_f( 'field_pt_hp_numbers', 'Simple Numbers', 'simple_numbers', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_hp_num_val', 'Value', 'value' ),
                    _tr_f( 'field_pt_hp_num_sfx', 'Suffix', 'suffix' ),
                    _tr_f( 'field_pt_hp_num_lbl', 'Label', 'label' ),
                ),
            )),
            _tr_f( 'field_pt_hp_svc_tag', 'Services Tagline', 'services_tagline' ),
            _tr_f( 'field_pt_hp_svc_head', 'Services Heading', 'services_heading' ),
            _tr_f( 'field_pt_hp_svc_sub', 'Services Subtitle', 'services_subtitle', 'textarea' ),
            _tr_f( 'field_pt_hp_svc_cats', 'Service Categories', 'services_categories', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_pt_hp_svc_c_title', 'Title', 'title' ),
                    _tr_f( 'field_pt_hp_svc_c_desc', 'Description', 'description', 'textarea' ),
                    _tr_f( 'field_pt_hp_svc_c_link', 'Link', 'link' ),
                    _tr_f( 'field_pt_hp_svc_c_subs', 'Sub-Items', 'sub_items', 'repeater', array(
                        'layout' => 'table',
                        'sub_fields' => array(
                            _tr_f( 'field_pt_hp_svc_cs_lbl', 'Label', 'label' ),
                            _tr_f( 'field_pt_hp_svc_cs_desc', 'Description', 'description', 'textarea' ),
                        ),
                    )),
                ),
            )),
            _tr_f( 'field_pt_hp_why_head', 'Why Us Heading', 'why_us_heading' ),
            _tr_f( 'field_pt_hp_why_img', 'Why Us Image URL', 'why_us_image' ),
            _tr_f( 'field_pt_hp_why_alt', 'Why Us Image Alt', 'why_us_image_alt' ),
            _tr_f( 'field_pt_hp_why_feats', 'Why Us Features', 'why_us_features', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_pt_hp_why_f_title', 'Title', 'title' ),
                    _tr_f( 'field_pt_hp_why_f_cont', 'Content', 'content', 'textarea' ),
                    _tr_f( 'field_pt_hp_why_f_icon', 'Icon Name (lucide)', 'icon_name' ),
                ),
            )),
            _tr_f( 'field_pt_hp_why_cta', 'Why Us CTA Label', 'why_us_cta_label' ),
            _tr_f( 'field_pt_hp_why_cta_lnk', 'Why Us CTA Link', 'why_us_cta_link' ),
            _tr_f( 'field_pt_hp_why_sec', 'Why Us Secondary Label', 'why_us_secondary_label' ),
            _tr_f( 'field_pt_hp_why_sec_lnk', 'Why Us Secondary Link', 'why_us_secondary_link' ),
            _tr_f( 'field_pt_hp_faq_tag', 'FAQ Tagline', 'faq_tagline' ),
            _tr_f( 'field_pt_hp_faq_head', 'FAQ Heading', 'faq_heading' ),
            _tr_f( 'field_pt_hp_faq_sub', 'FAQ Subtitle', 'faq_subtitle', 'textarea' ),
            _tr_f( 'field_pt_hp_faq_items', 'FAQ Items', 'faq_items', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_pt_hp_faq_q', 'Question', 'question' ),
                    _tr_f( 'field_pt_hp_faq_a', 'Answer', 'answer', 'textarea' ),
                ),
            )),
            _tr_f( 'field_pt_hp_faq_cta_txt', 'FAQ CTA Text', 'faq_cta_text' ),
            _tr_f( 'field_pt_hp_faq_cta_lbl', 'FAQ CTA Label', 'faq_cta_label' ),
            _tr_f( 'field_pt_hp_faq_cta_lnk', 'FAQ CTA Link', 'faq_cta_link' ),
        ),
    ));

    // --- ABOUT ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_about',
        'title'    => 'About Page Fields',
        'location' => _tr_loc_template( 'template-about' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'aboutFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_ab_story_tag', 'Story Tagline', 'story_tagline' ),
            _tr_f( 'field_pt_ab_story_head', 'Story Heading', 'story_heading' ),
            _tr_f( 'field_pt_ab_story_body', 'Story Body', 'story_body', 'wysiwyg' ),
            _tr_f( 'field_pt_ab_story_img', 'Story Image URL', 'story_image' ),
            _tr_f( 'field_pt_ab_story_alt', 'Story Image Alt', 'story_image_alt' ),
            _tr_f( 'field_pt_ab_core_head', 'Core Heading', 'core_heading' ),
            _tr_f( 'field_pt_ab_core_vals', 'Core Values', 'core_values', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_pt_ab_cv_title', 'Title', 'title' ),
                    _tr_f( 'field_pt_ab_cv_desc', 'Description', 'description', 'textarea' ),
                ),
            )),
            _tr_f( 'field_pt_ab_core_img', 'Core Image URL', 'core_image' ),
            _tr_f( 'field_pt_ab_core_alt', 'Core Image Alt', 'core_image_alt' ),
            _tr_f( 'field_pt_ab_core_cta', 'Core CTA Label', 'core_cta_label' ),
            _tr_f( 'field_pt_ab_core_cta_lnk', 'Core CTA Link', 'core_cta_link' ),
            _tr_f( 'field_pt_ab_core_sec', 'Core Secondary Label', 'core_secondary_label' ),
            _tr_f( 'field_pt_ab_core_sec_lnk', 'Core Secondary Link', 'core_secondary_link' ),
            _tr_f( 'field_pt_ab_assoc_head', 'Associations Heading', 'associations_heading' ),
            _tr_f( 'field_pt_ab_assoc_logos', 'Associations Logos', 'associations_logos', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_ab_al_logo', 'Logo URL', 'logo' ),
                    _tr_f( 'field_pt_ab_al_alt', 'Alt Text', 'alt_text' ),
                ),
            )),
            _tr_f( 'field_pt_ab_comm_head', 'Community Heading', 'community_heading' ),
            _tr_f( 'field_pt_ab_comm_body', 'Community Body', 'community_body', 'wysiwyg' ),
            _tr_f( 'field_pt_ab_comm_img', 'Community Image URL', 'community_image' ),
            _tr_f( 'field_pt_ab_comm_alt', 'Community Image Alt', 'community_image_alt' ),
            _tr_f( 'field_pt_ab_comm_cta', 'Community CTA Label', 'community_cta_label' ),
            _tr_f( 'field_pt_ab_comm_cta_lnk', 'Community CTA Link', 'community_cta_link' ),
            _tr_f( 'field_pt_ab_comm_sec', 'Community Secondary Label', 'community_secondary_label' ),
            _tr_f( 'field_pt_ab_comm_sec_lnk', 'Community Secondary Link', 'community_secondary_link' ),
        ),
    ));

    // --- COMMERCIAL WASTE ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_commercial',
        'title'    => 'Commercial Waste Fields',
        'location' => _tr_loc_template( 'template-commercial-waste' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'commercialWasteFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_cw_hero_head', 'Hero Heading', 'hero_heading' ),
            _tr_f( 'field_pt_cw_hero_sub', 'Hero Subheading', 'hero_subheading', 'textarea' ),
            _tr_f( 'field_pt_cw_hero_img', 'Hero Image URL', 'hero_image' ),
            _tr_f( 'field_pt_cw_hero_cta', 'Hero CTA Label', 'hero_cta_label' ),
            _tr_f( 'field_pt_cw_hero_cta_lnk', 'Hero CTA Link', 'hero_cta_link' ),
            _tr_f( 'field_pt_cw_hero_ph', 'Hero Phone Label', 'hero_phone_label' ),
            _tr_f( 'field_pt_cw_hero_ph_lnk', 'Hero Phone Link', 'hero_phone_link' ),
        ),
    ));

    // --- WHO WE SERVE ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_who_serve',
        'title'    => 'Who We Serve Fields',
        'location' => _tr_loc_template( 'template-who-we-serve' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'whoWeServeFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_wws_hero_head', 'Hero Heading', 'hero_heading' ),
            _tr_f( 'field_pt_wws_hero_sub', 'Hero Subheading', 'hero_subheading', 'textarea' ),
            _tr_f( 'field_pt_wws_hero_img', 'Hero Image URL', 'hero_image' ),
            _tr_f( 'field_pt_wws_hero_cta', 'Hero CTA Label', 'hero_cta_label' ),
            _tr_f( 'field_pt_wws_hero_cta_lnk', 'Hero CTA Link', 'hero_cta_link' ),
            _tr_f( 'field_pt_wws_hero_ph', 'Hero Phone Label', 'hero_phone_label' ),
            _tr_f( 'field_pt_wws_hero_ph_lnk', 'Hero Phone Link', 'hero_phone_link' ),
        ),
    ));

    // --- OUR PROCESS ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_process',
        'title'    => 'Our Process Fields',
        'location' => _tr_loc_template( 'template-our-process' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'ourProcessFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_op_hero_head', 'Hero Heading', 'hero_heading' ),
            _tr_f( 'field_pt_op_hero_sub', 'Hero Subheading', 'hero_subheading', 'textarea' ),
            _tr_f( 'field_pt_op_hero_img', 'Hero Image URL', 'hero_image' ),
            _tr_f( 'field_pt_op_hero_cta', 'Hero CTA Label', 'hero_cta_label' ),
            _tr_f( 'field_pt_op_hero_cta_lnk', 'Hero CTA Link', 'hero_cta_link' ),
            _tr_f( 'field_pt_op_hero_ph', 'Hero Phone Label', 'hero_phone_label' ),
            _tr_f( 'field_pt_op_hero_ph_lnk', 'Hero Phone Link', 'hero_phone_link' ),
        ),
    ));

    // --- LOCATIONS ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_locations',
        'title'    => 'Locations Page Fields',
        'location' => _tr_loc_template( 'template-locations' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'locationsFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_locs_hero_head', 'Hero Heading', 'hero_heading' ),
            _tr_f( 'field_pt_locs_hero_sub', 'Hero Subheading', 'hero_subheading', 'textarea' ),
            _tr_f( 'field_pt_locs_hero_img', 'Hero Image URL', 'hero_image' ),
            _tr_f( 'field_pt_locs_hero_cta', 'Hero CTA Label', 'hero_cta_label' ),
            _tr_f( 'field_pt_locs_hero_cta_lnk', 'Hero CTA Link', 'hero_cta_link' ),
            _tr_f( 'field_pt_locs_hero_ph', 'Hero Phone Label', 'hero_phone_label' ),
            _tr_f( 'field_pt_locs_hero_ph_lnk', 'Hero Phone Link', 'hero_phone_link' ),
            _tr_f( 'field_pt_locs_areas_head', 'Areas Heading', 'areas_heading' ),
            _tr_f( 'field_pt_locs_areas_sub', 'Areas Subtitle', 'areas_subtitle', 'textarea' ),
        ),
    ));

    // --- JOIN OUR NETWORK ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_join_network',
        'title'    => 'Join Our Network Fields',
        'location' => _tr_loc_template( 'template-join-our-network' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'joinNetworkFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_jn_hero_head', 'Hero Heading', 'hero_heading' ),
            _tr_f( 'field_pt_jn_hero_sub', 'Hero Subheading', 'hero_subheading', 'textarea' ),
            _tr_f( 'field_pt_jn_hero_img', 'Hero Image URL', 'hero_image' ),
            _tr_f( 'field_pt_jn_hero_cta', 'Hero CTA Label', 'hero_cta_label' ),
            _tr_f( 'field_pt_jn_hero_ph', 'Hero Phone Label', 'hero_phone_label' ),
            _tr_f( 'field_pt_jn_hero_ph_lnk', 'Hero Phone Link', 'hero_phone_link' ),
            _tr_f( 'field_pt_jn_logos_hl', 'Logos Headline', 'logos_headline' ),
            _tr_f( 'field_pt_jn_ben_tag', 'Benefits Tagline', 'benefits_tagline' ),
            _tr_f( 'field_pt_jn_ben_head', 'Benefits Heading', 'benefits_heading' ),
            _tr_f( 'field_pt_jn_ben_sub', 'Benefits Subtitle', 'benefits_subtitle', 'textarea' ),
            _tr_f( 'field_pt_jn_ben_cards', 'Benefit Cards', 'benefits_cards', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_pt_jn_bc_icon', 'Icon Name (lucide)', 'icon_name' ),
                    _tr_f( 'field_pt_jn_bc_title', 'Title', 'title' ),
                    _tr_f( 'field_pt_jn_bc_desc', 'Description', 'description', 'textarea' ),
                ),
            )),
            _tr_f( 'field_pt_jn_how_head', 'How It Works Heading', 'how_heading' ),
            _tr_f( 'field_pt_jn_how_sub', 'How It Works Subtitle', 'how_subtitle' ),
            _tr_f( 'field_pt_jn_how_steps', 'Steps', 'how_steps', 'repeater', array(
                'layout' => 'block',
                'sub_fields' => array(
                    _tr_f( 'field_pt_jn_hs_num', 'Number', 'number' ),
                    _tr_f( 'field_pt_jn_hs_title', 'Title', 'title' ),
                    _tr_f( 'field_pt_jn_hs_desc', 'Description', 'description', 'textarea' ),
                ),
            )),
            _tr_f( 'field_pt_jn_stat_head', 'Stats Heading', 'stats_heading' ),
            _tr_f( 'field_pt_jn_stat_bullets', 'Stats Bullets', 'stats_bullets', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_jn_sb_text', 'Bullet Text', 'text' ),
                ),
            )),
            _tr_f( 'field_pt_jn_stat_nums', 'Stats Numbers', 'stats_numbers', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_jn_sn_val', 'Value', 'value' ),
                    _tr_f( 'field_pt_jn_sn_lbl', 'Label', 'label' ),
                ),
            )),
            _tr_f( 'field_pt_jn_em_tag', 'Email Section Tagline', 'email_tagline' ),
            _tr_f( 'field_pt_jn_em_head', 'Email Heading', 'email_heading' ),
            _tr_f( 'field_pt_jn_em_sub', 'Email Subtitle', 'email_subtitle', 'textarea' ),
            _tr_f( 'field_pt_jn_em_ph', 'Input Placeholder', 'email_placeholder' ),
            _tr_f( 'field_pt_jn_em_btn', 'Submit Label', 'email_submit_label' ),
            _tr_f( 'field_pt_jn_em_disc', 'Disclaimer', 'email_disclaimer' ),
            _tr_f( 'field_pt_jn_em_suc_head', 'Success Heading', 'email_success_heading' ),
            _tr_f( 'field_pt_jn_em_suc_msg', 'Success Message', 'email_success_message', 'textarea' ),
        ),
    ));

    // --- FAQ PAGE ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_faq',
        'title'    => 'FAQ Page Fields',
        'location' => _tr_loc_template( 'template-faq' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'faqPageFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_faq_hero_tag', 'Hero Tagline', 'hero_tagline' ),
            _tr_f( 'field_pt_faq_hero_head', 'Hero Heading', 'hero_heading' ),
            _tr_f( 'field_pt_faq_hero_hl', 'Hero Heading Highlight', 'hero_heading_highlight' ),
            _tr_f( 'field_pt_faq_hero_sub', 'Hero Subtitle', 'hero_subtitle', 'textarea' ),
            _tr_f( 'field_pt_faq_hero_img', 'Hero Image URL', 'hero_image' ),
            _tr_f( 'field_pt_faq_cta_text', 'CTA Text', 'cta_text' ),
            _tr_f( 'field_pt_faq_cta_label', 'CTA Button Label', 'cta_label' ),
            _tr_f( 'field_pt_faq_cta_link', 'CTA Button Link', 'cta_link' ),
        ),
    ));

    // --- CONTACT ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_contact',
        'title'    => 'Contact Page Fields',
        'location' => _tr_loc_template( 'template-contact' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'contactFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_ct_heading', 'Page Heading', 'page_heading' ),
            _tr_f( 'field_pt_ct_em_text', 'Emergency Text', 'emergency_text', 'textarea' ),
            _tr_f( 'field_pt_ct_em_phone', 'Emergency Phone', 'emergency_phone' ),
            _tr_f( 'field_pt_ct_em_ph_lnk', 'Emergency Phone Link', 'emergency_phone_link' ),
            _tr_f( 'field_pt_ct_vnd_text', 'Vendor Text', 'vendor_text' ),
            _tr_f( 'field_pt_ct_vnd_lnk_txt', 'Vendor Link Text', 'vendor_link_text' ),
            _tr_f( 'field_pt_ct_vnd_lnk_url', 'Vendor Link URL', 'vendor_link_url' ),
            _tr_f( 'field_pt_ct_card_head', 'Contact Card Heading', 'card_heading' ),
            _tr_f( 'field_pt_ct_phone', 'Phone', 'phone' ),
            _tr_f( 'field_pt_ct_phone_link', 'Phone Link', 'phone_link' ),
            _tr_f( 'field_pt_ct_email', 'Email', 'email' ),
            _tr_f( 'field_pt_ct_email_link', 'Email Link', 'email_link' ),
            _tr_f( 'field_pt_ct_hours', 'Business Hours', 'hours', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_ct_hrs_line', 'Line', 'line' ),
                ),
            )),
            _tr_f( 'field_pt_ct_form_head', 'Form Heading', 'form_heading' ),
            _tr_f( 'field_pt_ct_form_sub', 'Form Subtitle', 'form_subtitle' ),
            _tr_f( 'field_pt_ct_options', 'Interest Options', 'interest_options', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_ct_opt_val', 'Value', 'value' ),
                    _tr_f( 'field_pt_ct_opt_lbl', 'Label', 'label' ),
                ),
            )),
            _tr_f( 'field_pt_ct_submit', 'Submit Button Label', 'submit_label' ),
            _tr_f( 'field_pt_ct_priv_text', 'Privacy Text', 'privacy_text' ),
            _tr_f( 'field_pt_ct_priv_lnk_txt', 'Privacy Link Text', 'privacy_link_text' ),
            _tr_f( 'field_pt_ct_priv_lnk_url', 'Privacy Link URL', 'privacy_link_url' ),
        ),
    ));

    // --- REQUEST A SERVICE ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_request',
        'title'    => 'Request A Service Fields',
        'location' => _tr_loc_template( 'template-request-a-service' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'requestServiceFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_rs_heading', 'Page Heading', 'page_heading' ),
            _tr_f( 'field_pt_rs_em_text', 'Emergency Text', 'emergency_text', 'textarea' ),
            _tr_f( 'field_pt_rs_em_phone', 'Emergency Phone', 'emergency_phone' ),
            _tr_f( 'field_pt_rs_em_ph_lnk', 'Emergency Phone Link', 'emergency_phone_link' ),
            _tr_f( 'field_pt_rs_vnd_text', 'Vendor Text', 'vendor_text' ),
            _tr_f( 'field_pt_rs_vnd_lnk_txt', 'Vendor Link Text', 'vendor_link_text' ),
            _tr_f( 'field_pt_rs_vnd_lnk_url', 'Vendor Link URL', 'vendor_link_url' ),
            _tr_f( 'field_pt_rs_card_head', 'Contact Card Heading', 'card_heading' ),
            _tr_f( 'field_pt_rs_phone', 'Phone', 'phone' ),
            _tr_f( 'field_pt_rs_phone_link', 'Phone Link', 'phone_link' ),
            _tr_f( 'field_pt_rs_email', 'Email', 'email' ),
            _tr_f( 'field_pt_rs_email_link', 'Email Link', 'email_link' ),
            _tr_f( 'field_pt_rs_hours', 'Business Hours', 'hours', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_rs_hrs_line', 'Line', 'line' ),
                ),
            )),
            _tr_f( 'field_pt_rs_form_head', 'Form Heading', 'form_heading' ),
            _tr_f( 'field_pt_rs_form_sub', 'Form Subtitle', 'form_subtitle' ),
            _tr_f( 'field_pt_rs_options', 'Interest Options', 'interest_options', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_rs_opt_val', 'Value', 'value' ),
                    _tr_f( 'field_pt_rs_opt_lbl', 'Label', 'label' ),
                ),
            )),
            _tr_f( 'field_pt_rs_msg_lbl', 'Message Field Label', 'message_label' ),
            _tr_f( 'field_pt_rs_submit', 'Submit Button Label', 'submit_label' ),
            _tr_f( 'field_pt_rs_priv_text', 'Privacy Text', 'privacy_text' ),
            _tr_f( 'field_pt_rs_priv_lnk_txt', 'Privacy Link Text', 'privacy_link_text' ),
            _tr_f( 'field_pt_rs_priv_lnk_url', 'Privacy Link URL', 'privacy_link_url' ),
        ),
    ));

    // --- BOOK A CALL ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_book_call',
        'title'    => 'Book A Call Fields',
        'location' => _tr_loc_template( 'template-book-a-call' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'bookCallFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_bc_heading', 'Heading', 'heading' ),
            _tr_f( 'field_pt_bc_expectations', 'Expectations', 'expectations', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_bc_exp_text', 'Text', 'text' ),
                ),
            )),
            _tr_f( 'field_pt_bc_desc', 'Description', 'description', 'textarea' ),
            _tr_f( 'field_pt_bc_cal_embed', 'Calendar Embed Code', 'calendar_embed', 'textarea' ),
            _tr_f( 'field_pt_bc_cal_fb_head', 'Calendar Fallback Heading', 'calendar_fallback_heading' ),
            _tr_f( 'field_pt_bc_cal_fb_text', 'Calendar Fallback Text', 'calendar_fallback_text', 'textarea' ),
            _tr_f( 'field_pt_bc_skip_text', 'Skip Text', 'skip_text' ),
            _tr_f( 'field_pt_bc_cont_label', 'Continue Label', 'continue_label' ),
            _tr_f( 'field_pt_bc_cont_link', 'Continue Link', 'continue_link' ),
        ),
    ));

    // --- THANK YOU ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_thank_you',
        'title'    => 'Thank You Page Fields',
        'location' => _tr_loc_template( 'template-thank-you' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'thankYouFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_ty_heading', 'Heading', 'heading' ),
            _tr_f( 'field_pt_ty_subtitle', 'Subtitle', 'subtitle', 'textarea' ),
            _tr_f( 'field_pt_ty_steps_head', 'Steps Heading', 'steps_heading' ),
            _tr_f( 'field_pt_ty_steps', 'Next Steps', 'next_steps', 'repeater', array(
                'layout' => 'table',
                'sub_fields' => array(
                    _tr_f( 'field_pt_ty_step_text', 'Step Text', 'text' ),
                ),
            )),
            _tr_f( 'field_pt_ty_cta_label', 'Primary CTA Label', 'cta_label' ),
            _tr_f( 'field_pt_ty_cta_link', 'Primary CTA Link', 'cta_link' ),
            _tr_f( 'field_pt_ty_sec_label', 'Secondary Label', 'secondary_label' ),
            _tr_f( 'field_pt_ty_sec_link', 'Secondary Link', 'secondary_link' ),
        ),
    ));

    // --- PRIVACY POLICY ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_privacy',
        'title'    => 'Privacy Policy Fields',
        'location' => _tr_loc_template( 'template-privacy-policy' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'privacyFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_pp_heading', 'Heading', 'heading' ),
            _tr_f( 'field_pt_pp_embed_key', 'Termageddon Embed Key', 'embed_key' ),
            _tr_f( 'field_pt_pp_fallback', 'Fallback Text', 'fallback_text' ),
            _tr_f( 'field_pt_pp_fb_link', 'Fallback Link Text', 'fallback_link_text' ),
        ),
    ));

    // --- TERMS OF SERVICE ---
    acf_add_local_field_group( array(
        'key'      => 'group_pt_terms',
        'title'    => 'Terms of Service Fields',
        'location' => _tr_loc_template( 'template-terms-of-service' ),
        'show_in_graphql'    => true,
        'graphql_field_name' => 'termsFields',
        'graphql_types'     => array('Page'),
        'fields'   => array(
            _tr_f( 'field_pt_tos_heading', 'Heading', 'heading' ),
            _tr_f( 'field_pt_tos_embed_key', 'Termageddon Embed Key', 'embed_key' ),
            _tr_f( 'field_pt_tos_fallback', 'Fallback Text', 'fallback_text' ),
            _tr_f( 'field_pt_tos_fb_link', 'Fallback Link Text', 'fallback_link_text' ),
        ),
    ));
});
