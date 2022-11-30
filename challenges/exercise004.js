export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const numArr = nums.filter((num) => num < 1);
  return numArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const nameArr = names.filter((n) => n.charAt(0) === char);
  return nameArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbArr = words.filter((w) => w.split(" ")[0] === "to");
  return verbArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const intArr = nums.filter((n) => Number.isInteger(n));
  return intArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const citiesArr = users.map((user) => user.data["city"]["displayName"]);
  return citiesArr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqrtArr = nums.map((num) => +Math.sqrt(num).toFixed(2));
  return sqrtArr;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentence = sentences.filter((sen) =>
    sen.toLowerCase().includes(str.toLowerCase())
  );
  return sentence;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longSideArr = triangles
    .map((triangle) => triangle.sort((a, b) => b - a))
    .map((e) => e[0]);
  return longSideArr;
}
