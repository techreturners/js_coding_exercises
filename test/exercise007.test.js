import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(123456)).toBe(21);
    expect(sumDigits(555555)).toBe(30);
    expect(sumDigits(1)).toBe(1);
  });
});

describe("createRange", () => {
  test("returns a range of numbers as an array", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(2, 9)).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
    expect(createRange(4, 16, 3)).toEqual([4, 7, 10, 13, 16]);
    expect(createRange(0, 10, 5)).toEqual([0, 5, 10]);
  });
});

describe("getScreentimeAlertList", () => {
  test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 },
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 },
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 },
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 },
              },
            ],
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
              },
              {
                date: "2019-05-04",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 130 },
              },
            ],
          },
        ],
        "2019-05-04"
      )
    ).toEqual(["beth_1234", "sam_j_1989"]);
  });
});

xdescribe("hexToRGB", () => {
  test("returns hex code converted into an RGB code", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#f6e58d")).toBe("rgb(246, 229, 141)");
    expect(hexToRGB("#6ab04c")).toBe("rgb(106, 176, 76)");
    expect(hexToRGB("#4834d4")).toBe("rgb(72, 52, 212)");
  });
});

xdescribe("findWinner", () => {
  test("returns the sum of all its digits", () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"],
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["X", "0", null],
        ["0", "X", "0"],
        ["0", null, "X"],
      ])
    ).toBe("X");

    expect(
      findWinner([
        ["X", "0", null],
        ["0", "0", "X"],
        [null, "0", "X"],
      ])
    ).toBe("0");
    expect(
      findWinner([
        ["X", "0", "X"],
        ["0", "0", "X"],
        ["X", "X", "0"],
      ])
    ).toBe(null);
  });
});
