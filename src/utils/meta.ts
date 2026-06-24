/**
 * Builds a meta description for area service pages that fits within 155 chars.
 *
 * Max-length proof (worst case with postcode):
 *   tail = "EA-licensed end of tenancy clearance in Princes Risborough. HP27. Same-day. Free quote."
 *        = 87 chars
 *   budget = 155 - 87 - 2 = 66 chars
 *   total  = 66 + 2 + 87 = 155 ✓
 */
export function buildAreaTitle(service: string, town: string, postcode: string | null): string {
  const base = `${service} in ${town} | WasteWize`;
  if (!postcode) return base;
  const withPostcode = `${service} in ${town} (${postcode}) | WasteWize`;
  return withPostcode.length <= 60 ? withPostcode : base;
}

export function buildAreaMeta(
  service: string,
  town: string,
  postcode: string | null,
  localDescription: string | null,
): string {
  const tail = postcode
    ? `EA-licensed ${service} in ${town}. ${postcode}. Same-day. Free quote.`
    : `EA-licensed ${service} in ${town}. Same-day. Free quote.`;

  const budget = 155 - tail.length - 2;

  if (localDescription && budget >= 20) {
    let snippet = localDescription.slice(0, budget).trimEnd();
    snippet = snippet.replace(/[,;:\-—]+$/, '').trimEnd();
    return `${snippet}. ${tail}`;
  }

  return tail;
}
