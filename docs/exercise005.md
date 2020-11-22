# Challenges

This time we've got a few more problem solving challenges for you to work through.

As an extra challenge we want to make sure you're used to the ES6 arrow function syntax, so we've defined our functions using this new syntax.

## Tasks

1. Read the short guide to ES6 arrow functions included below.
2. Solve the problems in the `challenges/exercise005.js` file. If you use any functions _within_ the main functions, such as within a map, use arrow functions there too! To solve the final 2 challenges, you might first want to watch [this video](https://storage.googleapis.com/tech-returners-course/JavaScript_Challenges/advanced_objects.mp4) where Harriet looks at some advanced things we can do with Objects.
3. Take a look through your code and see if there is anywhere you can shorten your functions to use the "implicit return" syntax.
4. Take a look through your code and see if there's anywhere you can omit the function parentheses when using ES6 arrow syntax.
5. If you want to read more about new features added to the JavaScript language in the latest major version, ES6, [this online book](http://exploringjs.com/es6/) is well worth a gander.

# ES6 Arrow Functions

ES6 arrow functions provide an alternative syntax for creating functions. In ES6, these two snippets of code and more or less equivalent:

```javascript
function add(a, b) {
  return a + b;
}

add(10, 9);
```

```javascript
const add = (a, b) => {
  return a + b;
};

add(10, 9);
```

There are small differences between an arrow function and a normal function. For example in a normal function you can use a special variable, `arguments` inside the function to list all the arguments the function received:

```javascript
function add(a, b) {
  console.log(arguments); // logs 10 and 9
  return a + b;
}

add(10, 9);
```

But you can't do that in an arrow function!

```javascript
const add = (a, b) => {
  console.log(arguments); // ReferenceError, arguments is undefined!
  return a + b;
};

add(10, 9);
```

There also some differences around the keyword `this` which we don't need to go into at the moment.

#### Inplicit Return

Arrow functions allow us to shorten the syntax and do a one-line return statement, omiting the `return` keyword. This is a nice way of shortening very simple functions. For example:

```javascript
const add = (a, b) => {
  return a + b;
};
```

Can be re-written as:

```javascript
const add = (a, b) => a + b;
```

Where `a + b` is the return value of the function. This will not work for functions with more than 1 line in the function body.

#### Optional Parentheses

When your function takes a single parameter, you can choose to omit the parentheses around the parameter name when using ES6 arrow syntax:

For example:

```javascript
const isEven = (a) => {
  return a % 2 === 0;
};
```

Can be re-written as:

```javascript
const isEven = a => {
  return a % 2 === 0;
};
```

And with implicit return as well:

```javascript
const isEven = a => a % 2 === 0;
```
