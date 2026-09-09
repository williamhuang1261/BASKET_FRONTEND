/**
 * @description Resolves the active collaborative-basket session id, if any,
 * from a URL's query string. A pure function so the resolution logic is
 * testable without a browser - see docs/prd-collaborative-editing.md for
 * what a "session" is and is not.
 * @param {string} search - a URL's `search` string, e.g. "?share=abc123"
 * @returns {string | null} the session id, or null when no session is active
 */
export const resolveShareSession = (search: string): string | null => {
  const params = new URLSearchParams(search);
  const sessionId = params.get("share");
  if (!sessionId) return null;
  const trimmed = sessionId.trim();
  return trimmed.length > 0 ? trimmed : null;
};
