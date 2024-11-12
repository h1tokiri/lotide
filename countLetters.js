const assertEqual = function (actual, expected) {
  const stopSign = "\u{1F6D1}";
  const greenCheck = "\u{2705}";


  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function countLetters

// step 1 - define the input for countLetters

const countLetters = function (input) {

  // step 2 - initialize an object to store the letter counts

  const letterCounts = {};

  // step 3 - loop through the string using a for...of loop

  for (let char of input) {
    if (char === ' ') {
      continue;
    }
    // step 4 - check and increment the count for each letter
    if (letterCounts[char]) {
      letterCounts[char]++;
    } else {
      letterCounts[char] = 1;
    }

  } // step 5 - return or print the letter counts
  return letterCounts;
};

//test code

// assertEqual(countLetters("lighthouse in the house"));

const printObject = (obj) => {
  for (const [key, value] of
    Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};

const result = countLetters("lighthouse in the house");
console.log(result);

console.log("actual result:");
printObject(result);

const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

console.log("Expected result:");
printObject(expected);

// assertEqual(result,expected);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false


//method per larryAI

// Implement the countLetters function
// Great job on your countLetters function! It correctly takes a string as an argument and returns an object with each letter as a key and the number of times it appears as the value. Your use of a for...of loop to iterate through the string and your conditional logic to increment the count or initialize it to 1 is spot on.

// However, there are a few areas where your code could be improved:

// You've defined an assertEqual function, but it's not being used to test the countLetters function. The requirement specifies that you should use assertEqual to compare the letter counts from the resulting object against their expected value. For example, you could do something like this:
// const result = countLetters("lighthouse in the house");
// assertEqual(result['l'], 1);
// assertEqual(result['i'], 2);
// // and so on for the other letters
// The assertEqual function is designed to compare primitive values like numbers and strings, not objects. So, the commented out line // assertEqual(result,expected); wouldn't work as expected. If you want to compare two objects, you would need a function that can compare objects, which is beyond the scope of this exercise.

// There are several commented out lines of code at the end of your file. It's a good practice to remove any unused or unnecessary code to keep your codebase clean and easy to read.

// Keep going! You're on the right track.

module.exports = countLetters;