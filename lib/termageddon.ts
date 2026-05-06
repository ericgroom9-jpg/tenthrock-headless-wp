/**
 * Server-side fetch of a Termageddon policy embed.
 *
 * Termageddon's /api/render endpoint returns scoped CSS followed by the
 * policy markup. The CSS uses an ID selector keyed to the embed key and
 * targets a wrapper we don't render, so we strip <style> blocks and
 * extract only the <article> body (falling back to the full HTML if the
 * shape changes).
 *
 * Cached for 30 minutes via Next 16 fetch tags.
 */
const VALID_KEY = /^[A-Za-z0-9+/=]+$/;

export async function fetchTermageddonContent(embedKey: string): Promise<string | null> {
  if (!embedKey || !VALID_KEY.test(embedKey)) return null;
  try {
    const res = await fetch(
      `https://embed.termageddon.com/api/render/${encodeURIComponent(embedKey)}?origin=https://tenthrock.sher.dev`,
      {
        next: { revalidate: 1800, tags: ['termageddon'] },
      },
    );
    if (!res.ok) return null;
    const html = await res.text();
    return extractArticle(html);
  } catch {
    return null;
  }
}

export function extractArticle(html: string): string {
  // Strip <style>...</style> blocks (CSS is scoped to a wrapper we don't render).
  const noStyle = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  // Pull the <article> body when available, otherwise return the cleaned HTML.
  const m = noStyle.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  return (m ? m[1] : noStyle).trim();
}
