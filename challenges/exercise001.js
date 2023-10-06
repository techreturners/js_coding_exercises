// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');

	return word[0].toUpperCase() + word.substring(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	
	return firstName[0] + "." + lastName[0];
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	
	return originalPrice * ((vatRate / 100) + 1);
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	
	if(reduction == 0) {
		return originalPrice;
	}

	return originalPrice * (reduction / 100);
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	
	const length = str.length;
	let middleIndex = Math.floor(length/2);
	
	if (length % 2 == 0) {
		let otherMiddleIndex = middleIndex - 1;

		return str.charAt(otherMiddleIndex) + str.charAt(middleIndex);
	} else {
		return str.charAt(middleIndex);
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	
	let reversed = "";

	for(let i = word.length - 1; i >= 0; i--) {
		reversed += word[i];
	}

	return reversed;
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	let reversedArray = [];

	words.forEach(word => {
		let reversed = "";

		for(let i = word.length - 1; i >= 0; i--) {
		reversed += word[i];
		}

		reversedArray.push(reversed);
	})

	return reversedArray;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	
	let linuxUsersCount = 0;

	users.forEach(user => {
		if (user.type == "Linux") {
			linuxUsersCount++;
		}
	})

	return linuxUsersCount;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	
	let totalScore = 0;

	scores.forEach(score => totalScore+= score);

	return (totalScore / scores.length).toFixed(2);
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
}
