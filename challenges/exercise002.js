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
	
	let sheepCounter = 0;

	for(let i = 0; i < arr.length; i++) {
		if (arr[i] === 'sheep') {
			sheepCounter++;
		}
	}

	return sheepCounter;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	
	const hasM = person.address.postCode[0].toLowerCase() === 'm';;
	const isManchester = person.address.city.toLowerCase() === 'manchester';

	return hasM && isManchester;
}
