// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalized;
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  const initial1 = firstName.charAt(0).toUpperCase(); 
  const initial2 = lastName.charAt(0).toUpperCase(); 

  const initials = initial1 + '.' + initial2;
  
  return initials;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  if (vatRate > 0) {
    let newRate = vatRate / 100;
    let vatAdded = originalPrice + (originalPrice * newRate);

    return Math.round( vatAdded * 1e2 ) / 1e2;
  } else {
    return originalPrice;
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  if (reduction > 0) {
    let newReduction = reduction / 100;
    let newPrice = originalPrice - (originalPrice * newReduction);

    return Math.round( newPrice * 1e2 ) / 1e2;
  } else {
    return originalPrice;
  }
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let position;
  let length;

  if (str.length % 2 == 1) {
      position = str.length / 2;
      length = 1;
  } else {
      position = str.length / 2 - 1;
      length = 2;
  }

  return str.substring(position, position + length)
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
