import { describe, expect, it } from "vitest";
import { getModOneHundred } from "../../src/algorithm/2.2";

describe("mod100", () => {
  it("give 1 param", () => {
    const result = getModOneHundred(33);
    expect(result).toEqual(33);
  });

  it("give 3 param", () => {
    const result = getModOneHundred(33, 22, 55);
    expect(result).toEqual(10);
  });

  it("100 mod 100 === 0", () => {
    const result = getModOneHundred(33, 22, 45);
    expect(result).toEqual(0);
  });
});
