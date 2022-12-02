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

describe("hexToRGB", () => {
  test("returns hex code converted into an RGB code", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#6F3C66")).toBe("rgb(111,60,102)");
    expect(hexToRGB("#6FFF2F")).toBe("rgb(111,255,47)");
    expect(hexToRGB("#37FFFF")).toBe("rgb(55,255,255)");
  });
});

describe("findWinner", () => {
  test("return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner", () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"],
      ])
    ).toEqual("X");
    expect(
      findWinner([
        ["X", "0", null],
        ["0", "X", "0"],
        ["0", null, "X"],
      ])
    ).toEqual("X");

    expect(
      findWinner([
        ["X", "0", null],
        ["0", "0", "X"],
        [null, "0", "X"],
      ])
    ).toEqual("0");
    expect(
      findWinner([
        ["X", "0", "X"],
        ["0", "0", "X"],
        ["X", "X", "0"],
      ])
    ).toEqual(null);
    expect(
      findWinner([
        ["X", "X", "X"],
        ["0", null, null],
        [null, null, "0"],
      ])
    ).toEqual("X");
  });
});
