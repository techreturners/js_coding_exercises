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

In these exercise we would like you to take a look at two new features of ES6, the Spread Operator and Optional Chaining.

# Task 1: The Spread Operator

The Spread Operator or 'Spread Syntax' is a handy feature where you can iterate through iterable data (like arrays, strings or objects) simply using '...' syntax. This is especially useful when working with lists as well as iterating through large amounts of data quickly. 

1.1) Work through the Katas in exercise008 solving these using the ✨Spread Operator✨

1.2) Revisit your getLongestSides() function from Exercise004. Can you refactor this function using Spread Syntax too?

You may have solved it using this method already - in which case, great job! 🙌 Is there anywhere else in your code where this method might be useful?

# Task 2: Optional Chaining

When working with objects in JavaScript we often want to access certain properties of an object to, for example, display different or conditional information on a webpage. 

However, sometimes there are situations where we don't know whether certain data exists yet (like when calling an external API) or where data not existing or being 'null' is normal. If we try and access non-existent properties on an object though, JavaScript throws an error!

````
let user = {}; // a user without "address" property

alert(user.address.postcode); // Throws Error! 
````

There are many ways of getting around this such as conditionally checking a property exists before trying to access it, such as:

```
alert(user.address !== undefined ? user.address.postcode : null)
```

These workarounds can get messy and confusing though, especially if you have something deeply nested. A more elegant solution is ✨Optional Chaining✨:

```
alert(user?.address?.postcode); // undefined (no error)
```

The above code checks user exists (is not null or undefined). If user *does* exist it moves on and checks address exists. If address exists it will try and return postcode. If anywhere in this chain is undefined or null, the operation exits or "short-circuits" with undefined.

This method can also be used to check for functions or properties, where a function or property may not exist. For example:

```
let catUser = {
    miceEaten: 5,
  sayMeow() {
    alert("Meow!");
  }
};

let dogGuest = {};

catUser.sayMeow?.(); // Meow!

dogUser.sayMeow?.(); // nothing (method doesn't exist)


catUser.miceEaten?.[]; // 5

dogUser.miceEaten?.[]; // undefined (dogs don't eat mice! 🐭)
```


1.1) Work through the Exercises008 using ✨Optional chaining✨