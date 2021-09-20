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
    if (!string) throw new Error("string is required");
    // Your solution using the spread operator here!
    return [...string]
}


// Optional Chaining Bonus activity

function addressLookUp(user){
    if (!user) throw new Error("user is required");
    // Your solution using optional chaining here!
    return user.address?.postcode;
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};