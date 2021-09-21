# Exercises 008 - Optional Bonus Activity!

Congratulations for finishing these JavaScript challenges!

You have covered so many different JavaScript concepts and skills in a very short space of time, including:
- Problem Solving
- For Loops
- ES6 methods
- Conditionals
- Data Types
- Objects
and more!

In these exercises we would like you to try some of the very latest JavaScript and have a go with Optional Chaining!

# Task 1: The Spread Operator

The Spread Operator or 'Spread Syntax' is a handy feature where you can iterate through iterable data (like arrays, strings or objects) simply using '...' syntax. This is especially useful when working with lists as well as iterating through large amounts of data quickly. 

1.1) Work through the Katas in exercise008 solving these using the ✨Spread Operator✨

1.2) Revisit your getLongestSides() function from Exercise004. Can you refactor this function using Spread Syntax too?

You may have solved it using this method already - in which case, great job! 🙌 Is there anywhere else in your code where this method might be useful?

# Task 2: Optional Chaining

When working with objects in JavaScript we often want to access certain properties of an object to, for example, display different or conditional information on a webpage. 

However, sometimes there are situations where we don't know whether certain data exists (like when calling an external API) or where data not existing or being 'null' is normal/expected. If we try and access non-existent properties on an object when an intermediate property does not exist, JavaScript throws an error!

For example, if we have some users, and we try to access their postcodes but - oh oh! They haven't provided addresses, JavaScript throws an error.

````
let user = {}; // a user without "address" property

alert(user.address.postcode); // Throws Error! 
````

Note: if you simply tried to access user.address and the user doesn't have an address, JavaScript returns undefined. JavaScript only throws an error if an intermediate property isn't there (in the above solution, `address` is the intermediate property)

There are many ways of getting around this such as conditionally checking a property exists before trying to access it, such as:

```
alert(user.address !== undefined ? user.address.postcode : null)
```

These workarounds can get messy and confusing though, especially if you have something deeply nested ⫸

A more elegant solution is ✨Optional Chaining✨:

```
alert(user?.address?.postcode); // undefined (no error)
```

The above code checks user exists (is not null or undefined). If user *does* exist it moves on and checks address exists. If address exists it will try and return postcode. If anywhere in this chain is undefined or null (a broken chain! ⛓), the operation exits or "short-circuits" with undefined.

This method can also be used to check for functions or properties, where a function or property may not exist. For example:

```
let catUser = {
    miceEaten: 5,
  sayMeow() {
    alert("Meow!");
  }
};

let dogUser = {};

catUser.sayMeow?.(); // Meow!

dogUser.sayMeow?.(); // nothing (method doesn't exist)


catUser.miceEaten?.[]; // 5

dogUser.miceEaten?.[]; // undefined (dogs don't eat mice, silly! 🐭)
```


1.1) Work through Exercises 008 using ✨Optional chaining✨

When it comes to working with React you will find Spread Syntax, Optional Chaining and methods like .map() and .filter() help a lot. We hope you enjoyed these exercises. Happy coding! 