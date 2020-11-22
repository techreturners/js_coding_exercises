# Challenges

These challenges are all around looping!

We have added a number of challenges for you to complete and we hope that by the end you will feel very confident with loops, if you don't already.

1. Remind yourself of how a for loop works, and how it can be used to access items in an array or characters in a string. If you need a reminder of the syntax, take a look at [this repl project](https://repl.it/repls/UniformAdmiredPolyhedron).
2. Solve all the challenges using a for loop and make a commit when you are done. (You can make commits along the way too but make sure they signal that you are solving the challenges with a for loop)
3. Revisit each challenge and replace the for loop with `.forEach`. For a reminder of the syntax of `forEach`, take a look at [this repl project](https://repl.it/repls/SuperiorDifferentLicenses) and read it through line by line, ensuring you understand the code's behaviour.
4. Remind yourself how `.filter` and `.map` work. Take a look at [this repl project](https://repl.it/repls/InsidiousNuttyHertz) for examples.
5. Take another look over your functions. Can you identify which functions could use `map` or `filter` instead of `forEach`? Are any functions **transformations** and are any functions **filtering** out items from an array? If so, refactor each function to use the appropriate choice of map/filter and commit your changes.

NB For these challenges you may also find the [Solving SquareNums 3 Ways Video](https://storage.googleapis.com/tech-returners-course/JavaScript_Challenges/JS_challenges_week3_squarenums_3ways.mp4) from the previous challenges useful, where we demonstrate solving a problem using a for loop, refactoring it to use `.forEach`, and then again to use `.map`.

## Cheatsheet

#### For Loop

- Loop over arrays, or characters in a string
- You have full control over the items you access - you can start your index positions at 1 or 3 or 0, get every other item, etc.

Basic Syntax:

```javascript
const arr = ["foo", "bar", "baz"];

for (let i = 0; i < arr.length; i++) {
  // do something with arr[i]
}
```

#### forEach

- Available on arrays only
- Access every item 1 by 1
- Very versatile, do whatever you want with each item in an array

Basic Syntax:

```javascript
const arr = ["foo", "bar", "baz"];

arr.forEach(function(item) {
  // do something with item
});
```

#### map

- Available on arrays only
- Access every item 1 by 1
- Used to transform items
- You will get an array of the same length
- Return the result of the transformation which will be put into the new array
- Remember to save the new array in a variable

Basic Syntax:

```javascript
const arr = ["foo", "bar", "baz"];

const newArr = arr.map(function(item) {
  // do something with item e.g.
  return item.charAt(0);
});

// newArr is your new transformed array
```

#### filter

- Available on arrays only
- Access every item 1 by 1
- Used to select only specific items from an array
- Return `true` to keep an item, `false` to reject
- Remember to save the new array in a variable

Basic Syntax:

```javascript
const arr = ["foo", "bar", "bazzzz"];

const newArr = arr.filter(function(item) {
  // do something with item e.g.
  if (item.length > 3) {
    return true;
  } else {
    return false;
  }
});

// newArr is your new filtered array
```
