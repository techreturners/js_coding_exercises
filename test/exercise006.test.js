import { sumMultiples, isValidDNA } from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of the any multiple of 3 or 5 inside an array ", () => {
    expect(sumMultiples([3, 4, 6, 7, 9, 12, 10, 20])).toBe(60);
  });
});

describe("isValidDNA", () => {
  test("returns true if a valid DNA string may contain character C, G, T, A", () => {
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("G")).toBe(true);
    expect(isValidDNA("T")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
  });
  test("returns false if the string is in lowerCase", () => {
    expect(isValidDNA("c")).toBe(false);
    expect(isValidDNA("g")).toBe(false);
    expect(isValidDNA("t")).toBe(false);
    expect(isValidDNA("a")).toBe(false);
  });
  test("returns false if the string not contain the valid DNA character", () => {
    expect(isValidDNA("x")).toBe(false);
  });
});
