export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	
	return nums.map(num => num * num);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	let result = words[0];

	words.shift();

	words.map(word => word[0].toUpperCase() + word.substring(1));

	for(let i = 0; i < words.length; i++) {
		let word = words[i];

		result += word.charAt(0).toUpperCase() + word.substring(1);
	}

	return result;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	
	let totalSubjects = 0;

	people.forEach(person => totalSubjects += person.subjects.length);

	return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');

	let hasIngredient = false;
	
	menu.forEach(item => {
		if (item.ingredients.includes(ingredient)) {
			hasIngredient = true;
		}
	});

	return hasIngredient;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
}
