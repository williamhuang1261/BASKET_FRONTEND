import { describe, expect, it } from "vitest";
import { resolveShareSession } from "../../../src/utils/Realtime/resolveShareSession";

describe("resolveShareSession", () => {
  it("returns null when there is no share param", () => {
    expect(resolveShareSession("")).toBeNull();
    expect(resolveShareSession("?maxStores=3")).toBeNull();
  });

  it("returns the session id when a share param is present", () => {
    expect(resolveShareSession("?share=abc123")).toBe("abc123");
  });

  it("returns the session id alongside other query params", () => {
    expect(resolveShareSession("?maxStores=3&share=abc123")).toBe("abc123");
  });

  it("treats an empty or whitespace-only share value as no session", () => {
    expect(resolveShareSession("?share=")).toBeNull();
    expect(resolveShareSession("?share=%20%20")).toBeNull();
  });

  it("trims surrounding whitespace from a real session id", () => {
    expect(resolveShareSession("?share=%20abc123%20")).toBe("abc123");
  });
});
