import { sumMultiples } from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of the any multiple of 3 or 5 inside an array ", () => {
    expect(sumMultiples([3, 4, 6, 7, 9, 12, 10, 20])).toBe(60);
  });
});
