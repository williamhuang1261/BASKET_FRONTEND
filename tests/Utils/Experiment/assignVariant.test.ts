import { describe, expect, it } from "vitest";
import { assignVariant } from "../../../src/utils/Experiment/assignVariant";

describe("assignVariant", () => {
  it("is deterministic for the same session and experiment id", () => {
    const first = assignVariant("session-1", "exp-1");
    const second = assignVariant("session-1", "exp-1");
    expect(second).toBe(first);
  });

  it("only ever returns A or B", () => {
    for (let i = 0; i < 200; i++) {
      const variant = assignVariant(`session-${i}`, "exp-1");
      expect(["A", "B"]).toContain(variant);
    }
  });

  it("splits close to 50/50 over a large sample of session ids", () => {
    const SAMPLE_SIZE = 2000;
    let countA = 0;
    for (let i = 0; i < SAMPLE_SIZE; i++) {
      if (assignVariant(`session-${i}`, "exp-1") === "A") countA++;
    }
    const shareA = countA / SAMPLE_SIZE;
    expect(shareA).toBeGreaterThan(0.45);
    expect(shareA).toBeLessThan(0.55);
  });

  it("can assign the same session id to different variants for different experiments", () => {
    // Not guaranteed for every session id, but true for at least some of a
    // large sample - otherwise the hash would be ignoring experimentId.
    let sawDifference = false;
    for (let i = 0; i < 200; i++) {
      const sessionId = `session-${i}`;
      if (
        assignVariant(sessionId, "exp-1") !== assignVariant(sessionId, "exp-2")
      ) {
        sawDifference = true;
        break;
      }
    }
    expect(sawDifference).toBe(true);
  });
});
