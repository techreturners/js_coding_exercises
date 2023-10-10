export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	
	return person.city.toLowerCase() === 'manchester' ? true : false;
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	
	let requiredBuses = 0;

	while(people > 0) {
		people -= 40;

		requiredBuses++;
	}
	
	return requiredBuses;
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}
