/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  const multiples = arr
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((prev, curr) => prev + curr, 0);
  return multiples;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const regex = /[^ACTG]/gi;
  return str.match(regex) === null;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  let newStr = str.replace(/[AT]/gi, (e) => (e === "A" ? "T" : "A"));
  newStr = newStr.replace(/[CG]/gi, (e) => (e === "C" ? "G" : "C"));
  return newStr;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  const primeNums = [2, 3, 5, 7];
  const primeNumArr = primeNums.filter((e) => n === e);
  const isPrime =
    primeNumArr.length === 0
      ? n !== 1 && n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0
      : true;
  return isPrime;
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
  let listArr = [];
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[j] = fill;
    }
    listArr[i] = arr;
  }
  return listArr;
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
  let count = 0;
  staff.forEach((obj) => {
    if (obj.rota.includes(day)) count++;
  });
  return count >= 3;
};
