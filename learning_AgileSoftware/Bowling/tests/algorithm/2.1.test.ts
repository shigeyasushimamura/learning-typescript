import { expect, describe, it } from "vitest";
import {
  TransformDigiToBinary,
  TransformDecimalToBinary,
} from "../../src/algorithm/2.1";

describe("10進数 -> 2進数", () => {
  it("0", () => {
    const result = TransformDigiToBinary(0);
    expect(result).toEqual(0);
  });

  it("3", () => {
    const result = TransformDigiToBinary(3);
    expect(result).toEqual(11);
  });

  it("6", () => {
    const result = TransformDigiToBinary(6);
    expect(result).toEqual(110);
  });
  it("127", () => {
    const result = TransformDigiToBinary(127);
    expect(result).toEqual(1111111);
  });
});

describe("binary -> decimal", () => {
  it("0", () => {
    const result = TransformDecimalToBinary(0);

    expect(result).toEqual(0);
  });
  it("110", () => {
    const result = TransformDecimalToBinary(110);

    expect(result).toEqual(6);
  });

  it("1001", () => {
    const result = TransformDecimalToBinary(1001);

    expect(result).toEqual(9);
  });
});
