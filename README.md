# ✨ JavaScript Practice ✨

This repository contains 8 sets of exercises which will help you to build your ability and confidence with JavaScript. Completing all 8 sets would be ideal, but please ensure you complete at least the first 6.

We will be checking over your solutions, so please ensure you `commit` after solving each problem, and don't forget to `push` to GitHub regularly.

You may find these exercises challenging but they give you the opportunity to showcase your Growth Mindset and commitment to programming and learning. You can always come to us if you are having any trouble! 😊

If you need reminding of any key Javascript concepts to solve these challenges we recommend the 'Codecademy: Learn Javascript' (free) course: https://www.codecademy.com/learn/introduction-to-javascript

NOTE: You are not required to purchase any PRO content from codecademy.

We also recommend this visual guide if you are unfamiliar with GitHub: https://agripongit.vincenttunru.com/

Remember to break down problems to help you solve them and that Google is your friend!

### 🗺 Instructions

To complete these challenges you will need to have Node.js installed on your computer. Follow this link and click on the green button to install for Mac or Windows: https://nodejs.org/en/download/

👉 We recommend using the most recent LTS (Long-Term Support) version of Node.

A download will start. When a pop-up appears please follow the installation instructions.

To check you have installed Node.js correctly, go to your terminal and type:

    node --version

Your terminal should respond with the version of Node you have installed. It will look something similar to the following:

    v18.12.1

🔍 Don't worry if you don't see the exact same version of Node 18. However, we recommend you use Node 18.x.x during this programme, as it is the current LTS (long-term supported) version as of Oct 2023.

Once you've got Node installed you can make a start - before you do please make sure to watch the [getting started video](https://storage.googleapis.com/your-return-to-tech/assessment-centre/assessment_exercises_guidance.mp4) as it walks you through instructions for getting started and the first exercise.

#### [Getting started video](https://storage.googleapis.com/your-return-to-tech/assessment-centre/assessment_exercises_guidance.mp4)

The short version is that you must:

👉 Use the Github website to `fork` the repository into your account.

👉 Use the `git clone` command _on the forked repository in your account_ to make a local copy of the repository on your computer.

👉 Install the dependencies in your local copy using `npm install`

👉 Complete the challenges.

👉 Use `git add`, `git commit` and `git push` to upload your work to the forked repository on your github account.

### 💻 Completing the challenges

👉 Next, look inside the **challenges** directory.

📗 Each JavaScript file in the **challenges** has an accompanying explanation in the **docs** folder, which includes handy tips and information to expand your learning.

🕵️ The first five JavaScript files have a corresponding file in the **tests** folder. After Exercise 005 you have to write your own tests too! 🥳

Your task is to make every test pass for each file. To run the tests, use the command:

    npm test

Work through each test one by one until you have them all passing. Initially, you'll have a lot of failing tests and a lot of output on the console. To focus on a single test, you can add `.only` to the test you are interested in:

```javascript
describe('capitalize', () => {
	test.only('returns a capitalized word', () => {
		expect(capitalize('hello')).toBe('Hello');
	});

	test('does nothing if the word is already capitalized', () => {
		expect(capitalize('Hello')).toBe('Hello');
	});

	test('capitalizes the first word of a sentence', () => {
		expect(capitalize('the quick fox')).toBe('The quick fox');
	});
});
```

⚠️ Don't forget to remove `.only` afterwards so you can run all your tests again.

You can also ignore tests momentarily by adding an `x` at the front:

```javascript
xdescribe('capitalize', () => {
	test('returns a capitalized word', () => {
		expect(capitalize('hello')).toBe('Hello');
	});

	test('does nothing if the word is already capitalized', () => {
		expect(capitalize('Hello')).toBe('Hello');
	});

	test('capitalizes the first word of a sentence', () => {
		expect(capitalize('the quick fox')).toBe('The quick fox');
	});
});
```

⚠️ But make sure when you push remotely to github that you have re-enabled all the tests!

Lastly, to run **ONE** test file at a time you can use the command `npm test` followed by the path to the file:

    npm test test/exercise004.test.js

### 🔎 Edge cases

We have provided basic tests for each function - but can you think of any more tests which would help make sure these functions behave correctly? 🧐

Think about **edge cases**, which are use cases for your function which you might not ordinarily expect, but which you need to handle regardless.

For example, the first function should capitalize a string. So we have tested that it works for a single word:

`capitalize("hello") --> "Hello"`

What about a longer string:

`capitalize("hello world") --> "Hello world"`

And when the string is already capitalized:

`capitalize("Hello everyone") --> "Hello everyone"`

What if the string contains no characters?

`capitalize("") --> ""`

👉 Try adding extra tests to cover possibilities that the existing tests miss!

### 🧹 Linting

To help you write "clean", tidy code, we've included some rules for [Eslint](https://eslint.org/) in the `.eslintrc` file in this repository.

Eslint helps by spotting common errors such as undefined variables. This is hugely beneficial, as it alerts you to many errors before you even run your code! It also helps you write code that will be easy for you and other developers to read in the future.

It is configured with a set of standard rules, which can be viewed [here](https://eslint.org/docs/rules/).

For reporting as-you-type, install and enable the eslint extension for VSCode. To do this:

1. Click the square symbol on the left hand bar for extensions
2. Search for "eslint" and click install

Alternatively, you can manually run eslint by running this command in the root folder of this repository on your machine:

    npx eslint ./

If there is no output then `eslint` has found no errors 🥳 If there are errors, you should fix them before committing your code.

# 🔥 The first challenge 🔥

Open [the first challenge instructions](docs/exercise001.md) to get started! 🙌
