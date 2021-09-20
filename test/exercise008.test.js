const {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString
} = require("../challenges/exercise008");


describe("colours", () => {
    test("returns a list of colours", () => {
        const colours = ["red", "orange", "green"];
        expect(printColours(colours)).toEqual(colours);
    });
});

describe("shoppingList", () => {
    test("returns a list with an extra item", () => {
        const list = ["one apple", "two dozen organic eggs", "cucumber", "bread"];
        const newItem = ["earl grey tea"]
        expect(shoppingList(list, newItem)).toEqual(["one apple", "two dozen organic eggs", "cucumber", "bread", "earl grey tea"]);
    });

    test("returns an empty list with extra items", () => {
        const list = [];
        const newItem = ["jelly", "melon", "pear"]
        expect(shoppingList(list, newItem)).toEqual(["jelly", "melon", "pear"]);
    });
});

describe("highestNumber", () => {
    test("returns the highest number", () => {
        const numbers = [12, 20, 18];
        expect(highestNumber(numbers)).toEqual(20);
    });
});

describe("splitThatString", () => {
    test("returns a string split up", () => {
        const string = "USA";
        expect(splitThatString(string)).toEqual(["U", "S", "A"]);
    });
    test("returns a string split up", () => {
        const string = "123";
        expect(splitThatString(string)).toEqual(["1", "2", "3"]);
    });
    test("returns an empty array if string isn't provided", () => {
        const string = "";
        expect(splitThatString(string)).toEqual([]);
    });
});



// Optional Chaining 


