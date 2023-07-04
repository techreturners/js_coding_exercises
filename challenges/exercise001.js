// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  const wordSplitted = word.split("");
  const upperCase = wordSplitted.map((myWord, index) => {
    if (index === 0) {
      return myWord.toUpperCase();
    } else {
      return myWord;
    }
  });
  return upperCase.join("");
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  const sum = (originalPrice / 100) * vatRate;

  if (Number.isInteger(originalPrice + sum)) {
    return originalPrice + sum;
  } else {
    return Number((originalPrice + sum).toFixed(2));
  }
}

// export function getSalePrice(originalPrice, reduction) {
// 	if (originalPrice === undefined)
// 		throw new Error('originalPrice is required');
// 	if (reduction === undefined) throw new Error('reduction is required');
// 	// Add your code here!
// }

// export function getMiddleCharacter(str) {
// 	if (str === undefined) throw new Error('str is required');
// 	// Add your code here!
// }

// export function reverseWord(word) {
// 	if (word === undefined) throw new Error('word is required');
// 	// Add your code here!
// }

// export function reverseAllWords(words) {
// 	if (words === undefined) throw new Error('words is required');
// 	// Add your code here!
// }

// export function countLinuxUsers(users) {
// 	if (users === undefined) throw new Error('users is required');
// 	// Add your code here!
// }

// export function getMeanScore(scores) {
// 	if (scores === undefined) throw new Error('scores is required');
// 	// Add your code here!
// }

// export function simpleFizzBuzz(n) {
// 	if (n === undefined) throw new Error('n is required');
// 	// Add your code here!
// }
