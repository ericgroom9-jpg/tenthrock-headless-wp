<?php
/**
 * Code Snippets plugin snippet (scope: global).
 *
 * Yoast SEO meta is NOT writable through the default WordPress REST API, so this
 * registers a small authenticated REST route that sets a post's Yoast meta
 * description using Yoast's own API and refreshes the Yoast indexable, so the
 * value surfaces immediately over WPGraphQL (seo { metaDesc }) which the headless
 * frontend reads.
 *
 * NOTE: When pasting into the Code Snippets plugin, omit the opening <?php tag.
 *
 * Route:  POST /wp-json/tr/v1/seo-meta
 * Auth:   logged-in user with edit_posts (Basic auth via headless_sync)
 * Body:   { "items": [ { "id": 102, "metadesc": "..." }, ... ] }
 *   or:   { "id": 102, "metadesc": "..." }
 */
add_action('rest_api_init', function () {
    register_rest_route('tr/v1', '/seo-meta', array(
        'methods'             => 'POST',
        'permission_callback' => function () {
            return current_user_can('edit_posts');
        },
        'callback'            => 'tr_set_yoast_metadesc',
    ));
});

function tr_set_yoast_metadesc($req) {
    $params = $req->get_json_params();

    if (isset($params['items']) && is_array($params['items'])) {
        $items = $params['items'];
    } else {
        $items = array(array(
            'id'       => isset($params['id']) ? $params['id'] : 0,
            'metadesc' => isset($params['metadesc']) ? $params['metadesc'] : '',
        ));
    }

    $results = array();

    foreach ($items as $it) {
        $id   = isset($it['id']) ? (int) $it['id'] : 0;
        $desc = isset($it['metadesc']) ? (string) $it['metadesc'] : '';

        if (!$id || !get_post($id)) {
            $results[] = array('id' => $id, 'ok' => false, 'error' => 'invalid_id');
            continue;
        }

        // Per-post capability check (least privilege): the caller must be able to
        // edit this specific post, not merely have the generic edit_posts cap.
        if (!current_user_can('edit_post', $id)) {
            $results[] = array('id' => $id, 'ok' => false, 'error' => 'forbidden');
            continue;
        }

        // Meta descriptions are plain text: strip tags and normalise whitespace.
        $desc = sanitize_text_field(wp_strip_all_tags($desc));

        // Primary write: postmeta via Yoast's own setter when available.
        if (class_exists('WPSEO_Meta')) {
            WPSEO_Meta::set_value('metadesc', $desc, $id);
        } else {
            update_post_meta($id, '_yoast_wpseo_metadesc', $desc);
        }

        // Keep the Yoast indexable (read by the surfaces API / WPGraphQL) in sync.
        if (function_exists('YoastSEO')) {
            try {
                $repo = YoastSEO()->classes->get('Yoast\\WP\\SEO\\Repositories\\Indexable_Repository');
                $indexable = $repo->find_by_id_and_type($id, 'post', false);
                if ($indexable) {
                    $indexable->description = $desc;
                    $indexable->save();
                }
            } catch (\Throwable $e) {
                // Indexable refresh is best-effort; postmeta is the source of truth.
            }
        }

        $results[] = array(
            'id'       => $id,
            'ok'       => true,
            'metadesc' => get_post_meta($id, '_yoast_wpseo_metadesc', true),
        );
    }

    return array('results' => $results);
}
