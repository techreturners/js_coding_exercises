export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let nextNum = 0;
  let count = 0;
  nums.forEach((num, i, arr) => {
    // checking if the number is the first instance
    if (count === 0) {
      //returns the next number after the given number in the array
      if (num === n && i < arr.length - 1) {
        nextNum = arr[i + 1];
        count++;
        return;
      }
    }
    // if the number is found in the final index position of the array
    if (num === n && i === arr.length - 1) {
      nextNum = null;
      return;
    }
  });
  // if the number is not found in the array, returns null
  if (nextNum === 0) return null;
  return nextNum;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let arrOnes = [];
  let arrZeros = [];
  str.split("").forEach((e) => {
    if (e === "1") arrOnes.push("1");
    if (e === "0") arrZeros.push("0");
  });
  return { 1: arrOnes.length, 0: arrZeros.length };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const reversedNum = n.toString().split("").reverse().join("");
  return +reversedNum;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  const sumArr = arrs.flatMap((num) => num).reduce((prev, curr) => prev + curr);
  return sumArr;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    const firstNum = arr.shift();
    const lastNum = arr.pop();
    arr.unshift(lastNum);
    arr.push(firstNum);
    return arr;
  } else return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let hasSearchTerm = false;
  for (let prop in haystack) {
    if (
      haystack[prop].toString().toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      hasSearchTerm = true;
      break;
    }
  }
  return hasSearchTerm;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const strArr = str
    .toLowerCase()
    .split(" ")
    .map((e) => e.replace(/\p{P}/gu, ""));

  const newSetArr = [...new Set([...strArr])].map((e) => [e, 0]);
  const entries = new Map(newSetArr);
  const newObj = Object.fromEntries(entries);

  let count = 0;
  for (let prop in newObj) {
    strArr.map((word) => {
      if (prop === word) {
        count++;
        newObj[prop] += count;
      }
      count = 0;
    });
  }
  console.log(newObj);
  return newObj;
};
