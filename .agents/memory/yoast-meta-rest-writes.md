---
name: Writing Yoast SEO meta via API (tenthrock headless)
description: How to set Yoast meta description/title on the WP origin programmatically, since the default REST API can't
---

# Writing Yoast SEO meta on the WP origin

The headless frontend reads SEO from Yoast over WPGraphQL (`seo { metaDesc }`,
via `transformSeoData` in `lib/wordpress.ts`). To change a page's meta
description you must set it on the **WordPress origin** — there is no front-end
override, and values are NOT hardcoded.

## Yoast meta is NOT writable through the default WP REST API

- `_yoast_wpseo_metadesc` / `_yoast_wpseo_title` are not exposed in the standard
  `wp/v2/<type>` `meta` field — a PATCH with `meta:{_yoast_wpseo_metadesc:...}`
  is **silently dropped** (the response `meta` stays unchanged, no error).
- So you cannot set Yoast SEO fields with a plain REST post update.

## The working path: Code Snippets REST API + a custom route

- The WP origin runs the **Code Snippets** plugin, which exposes a REST API
  (`code-snippets/v1/snippets`, POST to create, `active:true` auto-activates,
  `scope:"global"`). This lets you register PHP entirely via API — no WP login.
- `scripts/register-yoast-seo-meta-rest-snippet.php` is installed as a snippet and
  registers `POST /wp-json/tr/v1/seo-meta` (auth: `edit_posts`). Body accepts a
  single `{id, metadesc}` or `{items:[...]}`. It writes via `WPSEO_Meta::set_value`
  AND syncs the Yoast indexable (`description`) so the value surfaces over WPGraphQL
  **immediately** (the indexable, not just postmeta, is what the surfaces API reads).
- After writing, flush the Next cache: `POST /api/revalidate {secret:WP_PREVIEW_SECRET, type:"all"}`.

## Gotcha: ISR stale-while-revalidate hides the change on first read

- After revalidate, the FIRST request to a service page serves the **stale** HTML
  while regenerating in the background; the new meta description only appears on the
  **second** request. When verifying rendered `<meta name="description">`, do a warm
  pass then re-read, or you'll see empty/old values and think it failed.

**Why:** WP write access exists only via REST with `preview_user_un`/`preview_user_pass`
(see wp-slug-quirks.md); Yoast's own UI is not reachable, so all SEO edits go through
this snippet route.
