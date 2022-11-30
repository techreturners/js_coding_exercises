import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([2, 8])).toBe(0);
    expect(sumMultiples([4, 22, 655, 123, 65, 23, 40, 1])).toBe(883);
  });
});

describe("isValid", () => {
  test("return true/false depending on whether it is a valid DNA string", () => {
    expect(isValidDNA("TCAG")).toBe(true);
    expect(isValidDNA("TTAAGZ")).toBe(false);
    expect(isValidDNA("AATTGB")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("return a string of the complementary base pairs", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("TGACA")).toBe("ACTGT");
    expect(getComplementaryDNA("GC")).toBe("CG");
  });
});

describe("isItPrime", () => {
  test("return true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(462)).toBe(false);
    expect(isItPrime(331)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(1, 0)).toEqual([[0]]);
    expect(createMatrix(2, "n")).toEqual([
      ["n", "n"],
      ["n", "n"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
    expect(
      areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      ], 'Tuesday')
    ).toBe(false);
    expect(
      areWeCovered([
        {
          name: "Sally",
          rota: [
            "Monday",
            "Tuesday",
            "Friday",
            "Saturday",
            "Sunday",
            "Thursday",
            "Wednesday",
          ],
        },
        {
          name: "Ricky",
          rota: [
            "Monday",
            "Tuesday",
            "Friday",
            "Saturday",
            "Sunday",
            "Thursday",
          ],
        },
        {
          name: "Pedro",
          rota: [
            "Monday",
            "Tuesday",
            "Friday",
            "Saturday",
            "Sunday",
            "Thursday",
          ],
        },
        {
          name: "John",
          rota: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Saturday",
            "Sunday",
            "Thursday",
          ],
        },
        { name: "Maria", rota: ["Wednesday"] },
      ],'Monday')
    ).toBe(true);
  });
});
