export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  const { fillings } = sandwich;
  return fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  const { city } = person;
  return city === "Manchester" ? true : false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  const limit = 40;
  let buses = Math.ceil(people / limit);
  return buses;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let sheepCounter = 0;
  arr.map((animal) => {
    if (animal === "sheep") {
      sheepCounter = sheepCounter + 1;
    }
  });
  return sheepCounter;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  const {
    address: { city, postCode },
  } = person;

  return city === "Manchester" && postCode[0] === "M" ? true : false;
}
