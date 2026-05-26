const MINOR_WORDS = new Set([
  "a", "an", "and", "as", "at", "but", "by", "en", "for", "if",
  "in", "of", "on", "or", "the", "to", "vs", "vs.", "via",
]);

function capitalizeWord(word: string): string {
  if (!word) return word;
  return word.split(/(['\u2019\-])/).map((part, i) => {
    if (i % 2 === 1) return part;
    if (!part) return part;
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join("");
}

export function toTitleCase(input: string | null | undefined): string {
  if (!input) return "";
  const segments = input.split(/(\s+|[\-\u2013\u2014:;])/);
  const wordIndices: number[] = [];
  segments.forEach((seg, i) => {
    if (seg && /\S/.test(seg) && !/^[\-\u2013\u2014:;]+$/.test(seg)) {
      wordIndices.push(i);
    }
  });
  const firstIdx = wordIndices[0];
  const lastIdx = wordIndices[wordIndices.length - 1];

  return segments.map((seg, i) => {
    if (!seg || /^\s+$/.test(seg) || /^[\-\u2013\u2014:;]+$/.test(seg)) return seg;
    const lower = seg.toLowerCase();
    if (i !== firstIdx && i !== lastIdx && MINOR_WORDS.has(lower)) {
      return lower;
    }
    return capitalizeWord(seg);
  }).join("");
}
