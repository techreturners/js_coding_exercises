/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  let sum = 0;
  const multiples = arr.filter((number) => {
    return number % 3 === 0 || number % 5 === 0;
  });
  for (let i = 0; i < multiples.length; i++) {
    sum = sum + multiples[i];
  }
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false
 * depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const letters = "CGTA";
  return letters.includes(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs.
 * In DNA, T always pairs with A, and C always pairs with G.
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const strSplitted = str.split("");
  const strFormatted = strSplitted.map((letter) => {
    switch (letter) {
      case "A": {
        return "T";
      }
      case "T": {
        return "A";
      }
      case "C": {
        return "G";
      }
      case "G": {
        return "C";
      }
    }
  });
  return strFormatted.join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not.
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    return n % 2 !== 0;
  }
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};
