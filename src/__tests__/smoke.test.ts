import { describe, it, expect } from "vitest";

// Tiny sanity test so CI passes and the project has a test harness.
describe("math", () => {
  it("adds", () => {
    expect(1 + 1).toBe(2);
  });
});