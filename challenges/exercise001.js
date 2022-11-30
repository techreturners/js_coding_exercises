// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let newWord = word.charAt(0).toUpperCase() + word.substring(1);
  return newWord;
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  let initial =
    firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
  return initial;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vat = (+vatRate /100) * +originalPrice
  return +(+originalPrice + vat).toFixed(2);
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let reducedPrice = (+reduction/100) * +originalPrice;
  return +(+originalPrice - reducedPrice).toFixed(2);
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let strLen = str.length;

  let middleChar = strLen%2 >0 ?  str.charAt(Math.ceil(strLen/2)-1): str.charAt((strLen/2)-1) + str.charAt(strLen/2);
  return middleChar;
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let newWord = word.split('').reverse().join('');
  return newWord;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversed = words.map(w=>w.split('').reverse().join(''));
  return reversed;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  const lnxUsers = users.filter(u=> u.type === 'Linux');
  return lnxUsers.length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const totScore = scores.reduce((prev,curr)=>prev + curr) ;
  return +(totScore / scores.length).toFixed(2);
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3 === 0 && n%5 !== 0) return 'fizz';
  else if (n%5 === 0 && n%3 !== 0) return 'buzz';
  else if (n%3 === 0 & n%5 ===0) return 'fizzbuzz'
  else return n;
}
