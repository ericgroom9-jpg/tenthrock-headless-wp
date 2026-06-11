<?php
/**
 * Tenth Rock — Staging-Only Noindex
 *
 * Prevents search engines from indexing the WordPress STAGING origin
 * (tenthrock.sherstaging.com) so it can never be crawled as a duplicate
 * of the production frontend (https://www.tenthrock.com).
 *
 * What it does (ONLY when the request host is a staging host AND the
 * request is a normal front-end page view — never an API request):
 *   1. Forces `noindex, nofollow` on the <meta name="robots"> tag, via
 *      BOTH core's `wp_robots` filter and Yoast's `wpseo_robots*` filters
 *      (Yoast, when active, renders its own robots meta and bypasses core).
 *   2. Sends an `X-Robots-Tag: noindex, nofollow` HTTP header on front-end
 *      responses (covers non-HTML resources crawlers may fetch).
 *   3. Replaces robots.txt with `User-agent: * / Disallow: /`.
 *
 * WHY THIS IS SAFE FOR PRODUCTION:
 *   - Every hook is gated behind tr_is_staging_host(); on any other host
 *     it is a complete no-op.
 *   - The production frontend (www.tenthrock.com) is a SEPARATE Next.js
 *     server — this PHP never executes there.
 *   - Production fetches content from this WordPress over GraphQL
 *     (server-to-server). It does NOT read Yoast's robots directive (the
 *     production pages emit no robots meta and the code never reads
 *     metaRobotsNoindex), so changing the robots output here cannot leak
 *     into production. As extra insurance, tr_is_frontend_request() skips
 *     GraphQL/REST API requests entirely.
 *
 * INSTALL: Paste into the Code Snippets plugin on tenthrock.sherstaging.com,
 * set to "Run snippet everywhere", and Activate. No configuration needed.
 */

if ( ! function_exists( 'tr_is_staging_host' ) ) {
	/**
	 * Is the current request being served from a staging host?
	 * Matches any *.sherstaging.com host (covers tenthrock.sherstaging.com).
	 */
	function tr_is_staging_host() {
		$host = isset( $_SERVER['HTTP_HOST'] ) ? strtolower( (string) $_SERVER['HTTP_HOST'] ) : '';
		if ( $host === '' ) {
			return false;
		}
		// Strip any port suffix (e.g. "host:443").
		$host = preg_replace( '/:\d+$/', '', $host );

		return ( substr( $host, -strlen( 'sherstaging.com' ) ) === 'sherstaging.com' );
	}
}

if ( ! function_exists( 'tr_is_frontend_request' ) ) {
	/**
	 * True only for normal front-end page views — excludes WP admin,
	 * WPGraphQL, and the WP REST API (the channels production consumes).
	 */
	function tr_is_frontend_request() {
		if ( is_admin() ) {
			return false;
		}
		if ( function_exists( 'is_graphql_http_request' ) && is_graphql_http_request() ) {
			return false;
		}
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return false;
		}
		$uri = isset( $_SERVER['REQUEST_URI'] ) ? (string) $_SERVER['REQUEST_URI'] : '';
		if ( $uri !== '' && ( strpos( $uri, '/graphql' ) !== false || strpos( $uri, '/wp-json' ) !== false ) ) {
			return false;
		}
		return true;
	}
}

if ( ! function_exists( 'tr_should_noindex' ) ) {
	function tr_should_noindex() {
		return tr_is_staging_host() && tr_is_frontend_request();
	}
}

// 1a. Core robots meta tag (used when Yoast is not active).
add_filter( 'wp_robots', function ( $robots ) {
	if ( ! tr_should_noindex() ) {
		return $robots;
	}
	unset( $robots['index'], $robots['follow'], $robots['max-image-preview'], $robots['max-snippet'], $robots['max-video-preview'] );
	$robots['noindex']  = true;
	$robots['nofollow'] = true;
	return $robots;
}, 99 );

// 1b. Yoast robots array (Yoast 14+) — force noindex/nofollow.
add_filter( 'wpseo_robots_array', function ( $robots ) {
	if ( ! tr_should_noindex() || ! is_array( $robots ) ) {
		return $robots;
	}
	$robots['index']  = 'noindex';
	$robots['follow'] = 'nofollow';
	return $robots;
}, 99 );

// 1c. Yoast robots string — final override of the rendered value.
add_filter( 'wpseo_robots', function ( $robots ) {
	if ( ! tr_should_noindex() ) {
		return $robots;
	}
	return 'noindex, nofollow';
}, 99 );

// 2. X-Robots-Tag header on front-end responses.
add_action( 'send_headers', function () {
	if ( ! tr_should_noindex() ) {
		return;
	}
	if ( ! headers_sent() ) {
		header( 'X-Robots-Tag: noindex, nofollow', true );
	}
} );

// 3. robots.txt: disallow everything on staging.
add_filter( 'robots_txt', function ( $output, $public ) {
	if ( ! tr_is_staging_host() ) {
		return $output;
	}
	return "User-agent: *\nDisallow: /\n";
}, 99, 2 );
