<?php
/**
 * Tenth Rock — Backfill Global Sections defaults
 *
 * Registers POST /wp-json/tr/v1/backfill-global-sections
 * Authenticated (edit_posts). For every Global Sections ACF field on the
 * `tr-global-sections` options page that is empty, writes the same default
 * the React components fall back to. Existing values are NEVER overwritten.
 */
add_action('rest_api_init', function () {
    register_rest_route('tr/v1', '/backfill-global-sections', array(
        'methods'  => 'POST',
        'permission_callback' => function () { return current_user_can('edit_posts'); },
        'callback' => 'tr_backfill_global_sections_handler',
    ));
});

function tr_gs_is_empty($v) {
    if ($v === null || $v === '' || $v === false) return true;
    if (is_array($v) && count($v) === 0) return true;
    return false;
}

function tr_gs_set_if_empty($field_key, $name, $value, &$report) {
    $current = get_field($name, 'option');
    if (tr_gs_is_empty($current)) {
        $ok = update_field($field_key, $value, 'option');
        $report['filled'][] = $name;
        if (!$ok) $report['failed'][] = $name;
    } else {
        $report['kept'][] = $name;
    }
}

function tr_backfill_global_sections_handler() {
    if (!function_exists('get_field')) {
        return new WP_Error('acf_missing', 'ACF Pro required', array('status' => 500));
    }

    $report = array('filled' => array(), 'kept' => array(), 'failed' => array());

    // ── Process Section ────────────────────────────────
    tr_gs_set_if_empty('field_gs_proc_tagline',  'process_tagline',  'Our Process', $report);
    tr_gs_set_if_empty('field_gs_proc_heading',  'process_heading',  'How It Works', $report);
    tr_gs_set_if_empty('field_gs_proc_subtitle', 'process_subtitle', "From first call to job complete, here's exactly what happens.", $report);
    tr_gs_set_if_empty('field_gs_proc_steps',    'process_steps', array(
        array('field_gs_proc_s_num' => '01', 'field_gs_proc_s_title' => 'You Call Us',         'field_gs_proc_s_desc' => 'Our experts are on standby 24/7 to solve it immediately.'),
        array('field_gs_proc_s_num' => '02', 'field_gs_proc_s_title' => 'We Scope the Job',    'field_gs_proc_s_desc' => 'A dedicated project manager is assigned to your account. They assess the situation and build a plan.'),
        array('field_gs_proc_s_num' => '03', 'field_gs_proc_s_title' => 'You Get a Flat Rate', 'field_gs_proc_s_desc' => 'One price, upfront, in writing. No hourly surprises, no fuel surcharges, no hidden line items. You approve it before anything moves.'),
        array('field_gs_proc_s_num' => '04', 'field_gs_proc_s_title' => 'Crews Are Dispatched','field_gs_proc_s_desc' => 'Our team is deployed to your site. Your project manager coordinates every detail and sends real-time updates until the job is done.'),
        array('field_gs_proc_s_num' => '05', 'field_gs_proc_s_title' => 'Problem Solved',      'field_gs_proc_s_desc' => 'Waste is removed, the site is clean, and you get photo documentation confirming completion. One invoice. Done.'),
    ), $report);

    // ── Stats Section ──────────────────────────────────
    tr_gs_set_if_empty('field_gs_stats_tagline',     'stats_tagline',     'Key Metrics', $report);
    tr_gs_set_if_empty('field_gs_stats_heading',     'stats_heading',     'Why Clients Call Us Again and Again.', $report);
    tr_gs_set_if_empty('field_gs_stats_subtitle',    'stats_subtitle',    'Numbers tell the story. Our clients stick with us because we deliver measurable results: lower costs, faster response, and fewer headaches managing waste across multiple locations.', $report);
    tr_gs_set_if_empty('field_gs_stats_cta_label',   'stats_cta_label',   'Request A Service', $report);
    tr_gs_set_if_empty('field_gs_stats_cta_link',    'stats_cta_link',    '/request-a-service', $report);
    tr_gs_set_if_empty('field_gs_stats_phone_label', 'stats_phone_label', '727.510.5454', $report);
    tr_gs_set_if_empty('field_gs_stats_phone_link',  'stats_phone_link',  'tel:+17275105454', $report);
    tr_gs_set_if_empty('field_gs_stats_image',       'stats_image',       '/images/stock/why-clients-nyc-sunrise.jpg', $report);
    tr_gs_set_if_empty('field_gs_stats_image_alt',   'stats_image_alt',   'Tenth Rock nationwide waste operations', $report);
    tr_gs_set_if_empty('field_gs_stats_cards', 'stats_cards', array(
        array('field_gs_stats_c_title' => 'Average Cost Savings', 'field_gs_stats_c_value' => '30%',  'field_gs_stats_c_desc' => 'Clients typically cut waste spend by 30% in their first year through vendor consolidation and rate optimization.'),
        array('field_gs_stats_c_title' => 'Locations Managed',    'field_gs_stats_c_value' => '5K+',  'field_gs_stats_c_desc' => 'Commercial locations across 48 states have trusted Tenth Rock for consistent, reliable waste service.'),
        array('field_gs_stats_c_title' => 'Rapid Response Rate',  'field_gs_stats_c_value' => '98%',  'field_gs_stats_c_desc' => 'When we commit to a timeline, we hit it. Delays cost money and can damage your brand. We move fast to stabilize your site, keep operations running, and protect your business.'),
    ), $report);

    // ── CTA Banner ─────────────────────────────────────
    tr_gs_set_if_empty('field_gs_ctab_tagline',     'cta_banner_tagline',     'Service Availability', $report);
    tr_gs_set_if_empty('field_gs_ctab_heading',     'cta_banner_heading',     'Check If We Service Your Area', $report);
    tr_gs_set_if_empty('field_gs_ctab_subtitle',    'cta_banner_subtitle',    'Enter your zip code to get started.', $report);
    tr_gs_set_if_empty('field_gs_ctab_placeholder', 'cta_banner_placeholder', 'Enter Zip Code', $report);
    tr_gs_set_if_empty('field_gs_ctab_button',      'cta_banner_button',      'Check Now', $report);

    // ── Reasons Section ────────────────────────────────
    tr_gs_set_if_empty('field_gs_reas_tagline',  'reasons_tagline',  'Benefits', $report);
    tr_gs_set_if_empty('field_gs_reas_heading',  'reasons_heading',  "More Reasons You'll Love Us", $report);
    tr_gs_set_if_empty('field_gs_reas_subtitle', 'reasons_subtitle', 'We rebuilt waste management from the ground up to serve businesses with multiple locations. No hidden fees, no confusing contracts, no operational gaps.', $report);
    tr_gs_set_if_empty('field_gs_reas_cta_label', 'reasons_cta_label', 'Request A Service', $report);
    tr_gs_set_if_empty('field_gs_reas_cta_link',  'reasons_cta_link',  '/request-a-service', $report);
    tr_gs_set_if_empty('field_gs_reas_features',  'reasons_features', array(
        array('field_gs_reas_f_icon' => 'Headset',      'field_gs_reas_f_title' => 'Dedicated Point of Contact', 'field_gs_reas_f_desc' => 'One person to handle everything. No call centers, no runarounds, just answers.'),
        array('field_gs_reas_f_icon' => 'CheckCircle2', 'field_gs_reas_f_title' => 'Job Completion Proof',       'field_gs_reas_f_desc' => 'Visual confirmation for every job we complete, available instantly.'),
        array('field_gs_reas_f_icon' => 'MapPin',       'field_gs_reas_f_title' => 'Local Crews, National Reach','field_gs_reas_f_desc' => 'Vetted local crews across 48 states. You get the responsiveness of a local provider with the accountability of a national partner.'),
        array('field_gs_reas_f_icon' => 'Truck',        'field_gs_reas_f_title' => 'Real Cost Savings',          'field_gs_reas_f_desc' => 'Clients typically save up to 30% through vendor consolidation, rate negotiation, and right-sized service.'),
    ), $report);

    // ── Final CTA ──────────────────────────────────────
    tr_gs_set_if_empty('field_gs_fcta_heading',    'final_cta_heading',    'Streamline Your Waste Management Today', $report);
    tr_gs_set_if_empty('field_gs_fcta_subtitle',   'final_cta_subtitle',   'One call. One partner. Every location covered. Stop juggling providers and start saving up to 30% on waste spend.', $report);
    tr_gs_set_if_empty('field_gs_fcta_label',      'final_cta_label',      'Request A Service', $report);
    tr_gs_set_if_empty('field_gs_fcta_link',       'final_cta_link',       '/request-a-service', $report);
    tr_gs_set_if_empty('field_gs_fcta_image',      'final_cta_image',      '/images/stock/final-cta-highway-sunset.jpg', $report);
    tr_gs_set_if_empty('field_gs_fcta_image_alt',  'final_cta_image_alt',  'Aerial view of an open highway at sunset symbolizing nationwide waste logistics', $report);
    tr_gs_set_if_empty('field_gs_fcta_phone',      'final_cta_phone',      '727.510.5454', $report);
    tr_gs_set_if_empty('field_gs_fcta_phone_link', 'final_cta_phone_link', 'tel:+17275105454', $report);

    // ── Location Section ───────────────────────────────
    tr_gs_set_if_empty('field_gs_loc_heading',     'location_heading',     'Where to Find Us', $report);
    tr_gs_set_if_empty('field_gs_loc_subtitle',    'location_subtitle',    'Headquartered in Clearwater Beach, FL. Dispatching crews across 48 states, 24/7.', $report);
    tr_gs_set_if_empty('field_gs_loc_address',     'location_address',     '140 Island Way Ste. 159, Clearwater Beach, FL 33767', $report);
    tr_gs_set_if_empty('field_gs_loc_addr_link',   'location_address_link','https://www.google.com/maps/search/?api=1&query=140+Island+Way+Ste+159+Clearwater+Beach+FL+33767', $report);
    tr_gs_set_if_empty('field_gs_loc_phone_note',  'location_phone_note',  'Available 24/7 for emergencies', $report);
    tr_gs_set_if_empty('field_gs_loc_phone',       'location_phone',       '727.510.5454', $report);
    tr_gs_set_if_empty('field_gs_loc_phone_link',  'location_phone_link',  'tel:+17275105454', $report);
    tr_gs_set_if_empty('field_gs_loc_email',       'location_email',       'hello@tenthrock.com', $report);
    tr_gs_set_if_empty('field_gs_loc_email_link',  'location_email_link',  'mailto:hello@tenthrock.com', $report);
    tr_gs_set_if_empty('field_gs_loc_hq_image',    'location_hq_image',    '/images/stock/location-clearwater-beach-v2.jpg', $report);
    tr_gs_set_if_empty('field_gs_loc_hq_img_alt',  'location_hq_image_alt','Aerial view of Clearwater Beach with white sand, turquoise water, hotels, and marina near Tenth Rock headquarters', $report);

    // ── FAQ Section ────────────────────────────────────
    tr_gs_set_if_empty('field_gs_faq_tagline',   'faq_section_tagline',  'Common Questions', $report);
    tr_gs_set_if_empty('field_gs_faq_heading',   'faq_section_heading',  'Frequently Asked Questions', $report);
    tr_gs_set_if_empty('field_gs_faq_subtitle',  'faq_section_subtitle', "Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team.", $report);
    tr_gs_set_if_empty('field_gs_faq_items', 'faq_items', array(
        array('field_gs_faq_q' => 'How Quickly Can You Arrange a Pickup?',          'field_gs_faq_a' => 'For emergencies, we can often have crews on-site within hours. For standard scheduled services, we typically start within 24-48 hours of account setup. Our 24/7 dispatch center takes your call day or night.'),
        array('field_gs_faq_q' => 'Do You Service Multiple Locations Nationwide?',  'field_gs_faq_a' => 'Yes, we operate across 48 states. Our centralized management platform allows you to handle waste services for hundreds of locations through a single point of contact and one consolidated invoice.'),
        array('field_gs_faq_q' => 'What Types of Waste Do You Handle?',             'field_gs_faq_a' => 'We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request.'),
        array('field_gs_faq_q' => 'Are There Long-Term Contracts?',                 'field_gs_faq_a' => "We believe in earning your business every day. While we offer contract savings, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in."),
        array('field_gs_faq_q' => 'How Do You Help With Sustainability Goals?',     'field_gs_faq_a' => 'Our goal is to minimize your landfill footprint and maximize potential rebates for recyclable materials.'),
    ), $report);
    tr_gs_set_if_empty('field_gs_faq_cta_text',  'faq_section_cta_text', 'Still Have Questions?', $report);
    tr_gs_set_if_empty('field_gs_faq_cta_label', 'faq_section_cta_label','Contact Us', $report);
    tr_gs_set_if_empty('field_gs_faq_cta_link',  'faq_section_cta_link', '/contact', $report);

    // ── Who We Help ────────────────────────────────────
    tr_gs_set_if_empty('field_gs_wh_tagline',  'who_help_tagline',  'Industries', $report);
    tr_gs_set_if_empty('field_gs_wh_heading',  'who_help_heading',  'Who We Help', $report);
    tr_gs_set_if_empty('field_gs_wh_subtitle', 'who_help_subtitle', 'From single-site operators to national brands, we support businesses that require reliable, consistent waste operations.', $report);

    // ── Logo Reel ──────────────────────────────────────
    tr_gs_set_if_empty('field_gs_lr_headline', 'logo_reel_headline', 'Supporting these leading national brands', $report);

    // ── Testimonials ───────────────────────────────────
    tr_gs_set_if_empty('field_gs_test_tagline', 'testimonials_tagline', 'Testimonials', $report);

    return rest_ensure_response(array(
        'success'      => true,
        'filled_count' => count($report['filled']),
        'kept_count'   => count($report['kept']),
        'failed_count' => count($report['failed']),
        'filled'       => $report['filled'],
        'kept'         => $report['kept'],
        'failed'       => $report['failed'],
    ));
}
