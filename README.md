# JavaScript Practice

This repository contains 7 lots of exercises for you to undertake and build on your coding and technical ability. We will be checking over your solutions, so please ensure you push to GitHub regularly. 

You may find these exercises challenging but they give you the opportunity to showcase your Growth Mindset and commitment to programming and learning in general. You can always come to us if you are having any trouble! 

We will be covering Javascript on the Your Return to Tech course, so it's really important your problem solving skills are fresh. 

If you need reminding of any key Javascript concepts to solve these challenges we recommend the 'Codecademy: Learn Javascript' (free) course: https://www.codecademy.com/learn/introduction-to-javascript

NOTE: You are not required to purchase any PRO content from CodeAcademy.

We also recommend this visual guide if you are unfamiliar with GitHub: https://agripongit.vincenttunru.com/

Remember to break down problems to help you solve them and that Google is your friend!

### Instructions

To complete these challenges you will need to have Node.js installed on your computer. Follow this link and click on the green button to install for Mac or Windows: https://nodejs.org/en/download/ 

A download will start. When a pop-up appears please follow the installation instructions. 

To check you have installed Node.js correctly, go to your terminal and type:

    node --version

Your terminal should respond with the version of Node you have installed. It will look something similar to the following (dont worry if its not the exact same version): 

    v14.5.0

Once you've got Node installed you can make a start - before you do please make sure to watch the [getting started video](https://storage.googleapis.com/your-return-to-tech/assessment-centre/assessment_exercises_guidance.mp4) as it walks you through instructions for getting started and the first exercise.

#### [Getting started video](https://storage.googleapis.com/your-return-to-tech/assessment-centre/assessment_exercises_guidance.mp4)

### Completing the challenges

After forking this repository (as shown in the video) you will need to then clone the repo locally and install its dependencies:

    npm install

If you look inside the **challenges** directory you will find a file of functions to implement.

To understand how these functions work, take a look in the corresponding test file where the desired functionality is described and read the accompanying "docs" provided. The doc files include handy tips and information to expand your learning.

To run the tests, run

    npm test

Work through each test 1 by 1 until you have them all passing. Initially, you'll have a lot of failing tests and a lot of output on the console. To focus on a single test, add `.only` to the test you are interested in:

```javascript
describe("capitalize", () => {
  test.only("returns a capitalized word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("does nothing if the word is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes the first word of a sentence", () => {
    expect(capitalize("the quick fox")).toBe("The quick fox");
  });
});
```

Don't forget to remove it afterwards so you can run all your tests again.

You can also ignore tests momentarily by adding an `x` at the front:

```javascript
xdescribe("capitalize", () => {
  test("returns a capitalized word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("does nothing if the word is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes the first word of a sentence", () => {
    expect(capitalize("the quick fox")).toBe("The quick fox");
  });
});
```

To run **ONE** test file at a time you can enter into the terminal npm test followed by the file extension:

    npm test exercise004.test.js  

### Edge cases

We have provided basic tests for each function - but can you think of any more tests which would help make sure these functions behave correctly?

Think about **edge cases**, which are use cases for your function which you might not ordinarily expect, but which you need to handle regardless.

For example, the first function should capitalize a string. So we have tested that it works for a single word:

`capitalize("hello") --> "Hello"`

What about a longer string:

`capitalize("hello world") --> "Hello world"`

And when the string is already capitalized:

`capitalize("Hello everyone") --> "Hello everyone"`

What if the string contains no characters?

`capitalize("") --> ""`

### Linting

To help you write "clean", tidy code, we've included Linting with [EsLint](https://eslint.org/) in this repository.

EsLint will tell you when you have incorrectly formatted your code, or when it suspects an error such as an undefined variable.

This is hugely beneficial, as it alerts you to many errors before you even run your code! It also helps you write code that will be easy for you and other developers to read in the future.

Is is configured with a set of standard rules, which can be viewed [here](https://eslint.org/docs/rules/).

For reporting as-you-type, install and enable the EsLint extension for VSCode (click the square symbol on the left hand bar for extensions).

To check all linting errors, run:

    npm run eslint

You should fix any errors before adding and commiting your code.

# The challenges

Open [the first challenge instructions](docs/exercise001.md) to get started!
