function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) +"."+ lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let priceWithVAT;
  if(vatRate>0){
    let vat = vatRate/100;
    priceWithVAT = originalPrice + (originalPrice*vat);
  }else{
    priceWithVAT = originalPrice;
  }
  let price = (priceWithVAT - Math.floor(priceWithVAT)) !== 0;

  if(price){
    priceWithVAT = priceWithVAT.toFixed(2);
  }
  return parseFloat(priceWithVAT);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let salePrice;

  if(reduction>0){
    let reductionPrice = reduction/100;
    salePrice = originalPrice - (originalPrice*reductionPrice);
  }else{
    salePrice = originalPrice;
  }

  let price = (salePrice - Math.floor(salePrice)) !== 0;

  if(price){
    const salePriceStr = String(salePrice);
    const decimalPlacesCount = salePriceStr.split('.')[1].length
    if(decimalPlacesCount>2){
      salePrice = salePrice.toFixed(2);
    }
  }

  return parseFloat(salePrice);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
