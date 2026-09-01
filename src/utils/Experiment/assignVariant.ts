export type Variant = "A" | "B";

const SESSION_ID_KEY = "basket_experiment_session_id";

/**
 * @description A small, dependency-free string hash (FNV-1a), used only to
 * turn a session id into a number for bucketing - not for anything
 * security-sensitive.
 * @param {string} input
 * @returns {number} A 32-bit unsigned integer
 */
const fnv1aHash = (input: string): number => {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
};

/**
 * @description Deterministically assigns a session id to variant A or B for
 * a given experiment. Same session id and experiment id always produce the
 * same variant, so a returning visitor sees a consistent experience, and the
 * split is close to 50/50 over many session ids (see
 * assignVariant.test.ts). No external experimentation service - see
 * docs/prd-ab-testing.md for what this is and is not.
 * @param {string} sessionId - Anonymous, client-generated session id
 * @param {string} experimentId - Which experiment this assignment is for
 * @returns {Variant} "A" or "B"
 */
export const assignVariant = (
  sessionId: string,
  experimentId: string,
): Variant => {
  const hash = fnv1aHash(`${experimentId}:${sessionId}`);
  return hash % 2 === 0 ? "A" : "B";
};

/**
 * @description Generates a fresh, random-enough anonymous session id. Not
 * cryptographically secure - it only needs to be unique enough to bucket
 * browsers into a variant, not to authenticate anyone.
 * @returns {string} A session id
 */
const generateSessionId = (): string =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

/**
 * @description Reads the anonymous session id from localStorage, creating
 * and persisting one on first call. Falls back to a fresh, unpersisted id if
 * localStorage is unavailable (e.g. private browsing), so the caller always
 * gets a usable id.
 * @returns {string} The session id
 */
export const getOrCreateSessionId = (): string => {
  try {
    const existing = window.localStorage.getItem(SESSION_ID_KEY);
    if (existing) return existing;

    const created = generateSessionId();
    window.localStorage.setItem(SESSION_ID_KEY, created);
    return created;
  } catch {
    return generateSessionId();
  }
};
