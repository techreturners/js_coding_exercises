const {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
} = require("../challenges/exercise004");

describe("findSmallNums", () => {
  test("returns an array of numbers smaller than 1", () => {
    expect(findSmallNums([8, 1, 1.3, 0.9, 0.4, -1])).toEqual([0.9, 0.4, -1]);
    expect(findSmallNums([-7, -243])).toEqual([-7, -243]);
    expect(findSmallNums([100, 88])).toEqual([]);
    expect(findSmallNums([])).toEqual([]);
  });
});

describe("findNamesBeginningWith", () => {
  test("returns an array of names beginning with the specified character", () => {
    const names = ["Sally", "Dave", "Susan", "Geoff", "Riley", "Sam"];
    expect(findNamesBeginningWith(names, "S")).toEqual([
      "Sally",
      "Susan",
      "Sam"
    ]);
    expect(findNamesBeginningWith(names, "D")).toEqual(["Dave"]);
    expect(findNamesBeginningWith(names, "F")).toEqual([]);
  });
});

describe("findVerbs", () => {
  test("returns an array of words that are considered verbs (because they begin with 'to ')", () => {
    const words = [
      "to eat",
      "fajita",
      "mouse",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ];
    expect(findVerbs(words)).toEqual(["to eat", "to sneak", "to squeak"]);
    expect(findVerbs(["bottle", "fish", "grain"])).toEqual([]);
  });

  test("does not mistake words that include 'to' elsewhere", () => {
    const words = [
      "to eat",
      "tower",
      "monitor",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ];
    expect(findVerbs(words)).toEqual(["to eat", "to sneak", "to squeak"]);
  });
});

describe("getIntegers", () => {
  test("returns an array containing only integers", () => {
    const nums = [1, 3.5, 2.1, 1, 4, 9];
    expect(getIntegers(nums)).toEqual([1, 1, 4, 9]);
    expect(getIntegers([])).toEqual([]);
    expect(getIntegers([4.9, 9.33, 12.4])).toEqual([]);
  });
});

describe("getCities", () => {
  test("returns an array of the cities of each user", () => {
    const users = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(getCities(users)).toEqual(["MCR", "LVP", "LVP", "GLW"]);
  });
});

describe("getSquareRoots", () => {
  test("gets the square root of each number to 2 decimal places", () => {
    const nums = [36, 77, 12, 355, 92, 5];
    expect(getSquareRoots(nums)).toEqual([6, 8.77, 3.46, 18.84, 9.59, 2.24]);
  });
});

describe("findSentencesContaining", () => {
  const sentencesAboutPackageJson = [
    "You should specify a license for your package so that people know how they are permitted to use it",
    "The main field is a module ID that is the primary entry point to your program",
    "The repository field should specify the place where your code lives",
    "The 'scripts' property is a dictionary containing script commands that are run at various times in the lifecycle of your package",
    "Dependencies are specified in a simple object that maps a package name to a version range",
    "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object",
    "If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required",
    "If you don’t plan to publish your package, the name and version fields are optional",
    "Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in npm search",
    "The bugs field should hold the url to your project’s issue tracker and / or the email address to which issues should be reported."
  ];

  test("returns only the sentences containing the specified string", () => {
    expect(
      findSentencesContaining(sentencesAboutPackageJson, "license")
    ).toEqual([
      "You should specify a license for your package so that people know how they are permitted to use it"
    ]);

    expect(
      findSentencesContaining(sentencesAboutPackageJson, "binary")
    ).toEqual([]);
  });

  test("it should not be case sensitive", () => {
    expect(
      findSentencesContaining(sentencesAboutPackageJson, "dependencies")
    ).toEqual([
      "Dependencies are specified in a simple object that maps a package name to a version range",
      "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object"
    ]);
  });
});

describe("getLongestSides", () => {
  test("returns the longest side of each set of triangle data", () => {
    const data = [[6, 7, 10], [9, 3, 6], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(getLongestSides(data)).toEqual([10, 9, 6, 13, 12]);

    const data2 = [[6, 7, 7], [9, 3, 9], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(getLongestSides(data2)).toEqual([7, 9, 6, 13, 12]);
  });
});
