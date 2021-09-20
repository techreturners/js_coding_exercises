// Spread Syntax Bonus activity

function printColours(colours){
    if (!colours) throw new Error("colour is required");
    // Your solution using the spread operator here!
    return[...colours]
}

function shoppingList(list, newItem){
    if (!newItem) throw new Error("newItem is required");
    // Your solution using the spread operator here!
    return[...list, ...newItem]
}

function highestNumber(numbers){
    if (!numbers) throw new Error("numbers are required");
    // Your solution using the spread operator here!
    const maxPrice = Math.max(...numbers);
    return maxPrice
}

function splitThatString(string){
    // Your solution using the spread operator here!
    return [...string]
}


// Optional Chaining Bonus activity




module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString
  };