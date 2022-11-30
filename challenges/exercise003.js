export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const sqNum = nums.map((num) => Math.pow(num, 2));
  return sqNum;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const camelCased = words.map((word, i) => {
    if (i > 0) {
      return word.charAt(0).toUpperCase() + word.substring(1);
    } else {
      return word;
    }
  });
  return camelCased.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const totSub = people
    .map((p) => p.subjects.length)
    .reduce((prev, cum) => prev + cum);
  return totSub;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  const ingred = menu
    .flatMap((m) => m.ingredients)
    .filter((ing) => ing === ingredient);
  const hasIngred = ingred.length === 0 ? false : true;
  return hasIngred;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const sortedNumArr = arr1
    .flatMap((num1) => arr2.filter((num2) => num1 === num2))
    .sort((a, b) => a - b);
  const duplicateNumArr = [...new Set([...sortedNumArr])];
  return duplicateNumArr;
}
