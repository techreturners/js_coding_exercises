export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  const squares = nums.map((num) => {
    return num * num;
  });
  return squares;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  const formattedWords = words.map((word, index) => {
    return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
  });
  return formattedWords.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let subjectsCounter = 0;
  const subjectsNumber = people.map((people) => {
    const { subjects } = people;
    return subjects.length;
  });

  for (let i = 0; i < subjectsNumber.length; i++) {
    subjectsCounter = subjectsCounter + subjectsNumber[i];
  }

  return subjectsCounter;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
