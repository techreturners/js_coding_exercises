export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const nIndex = nums.findIndex((number) => number === n);
  const isTheLastNumber = nums.length === nIndex + 1;
  return isTheLastNumber || nIndex === -1 ? null : nums[nIndex + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let counterNumber1 = 0;
  let counterNumber0 = 0;
  for (let i = 0; i <= str.split("").length; i++) {
    if (str[i] === "1") {
      counterNumber1 = counterNumber1 + 1;
    } else if (str[i] === "0") {
      counterNumber0 = counterNumber0 + 1;
    }
  }

  return { 0: counterNumber0, 1: counterNumber1 };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
