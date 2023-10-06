export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smaller = nums.filter((num) => {
    return num < 1;
  });
  return smaller;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const filteredNames = names.filter((name) => {
    return name[0] === char;
  });
  return filteredNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const verbs = words.filter((word) => {
    if (word[0] === "t" && word[1] === "o" && word[2] === " ") {
      return word;
    }
  });
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const integers = nums.filter((num) => {
    return Number.isInteger(num);
  });
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const cities = users.map((data) => {
    const {
      data: {
        city: { displayName },
      },
    } = data;
    return displayName;
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const squareRoot = nums.map((num) => {
    return Number(Math.sqrt(num).toFixed(2));
  });
  return squareRoot;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const sentence = sentences.filter((sentence) => {
    return sentence.toLowerCase().includes(str);
  });

  return sentence;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const longest = [];
  for (let i = 0; i < triangles.length; i++) {
    longest.push(Math.max(...triangles[i]));
  }
  return longest;
}
