// right now i am supposed to design a function that gets the indices of each number

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    //skip spaces
    if (char !== ' ') {
      if (results[char]) {
        // if the character already exists as a key, push the index to the array
        results[char].push(i);
      } else {
        // if it doesn't exist, create a new array with the index
        results[char] = [i];
      }
    }
  }
  return results;
};

//assertEqual
const assertEqual = function (actual, expected) {
  const stopSign = "\u{1F6D1}";
  const greenCheck = "\u{2705}";


  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertArraysEqual
const stopSign = "\u{1F6D1}"; // keeping my emojis
const greenCheck = "\u{2705}";

// eqArrays function that was copied over
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  //check if the arrays are equal using eqArrays
  if (eqArrays(arr1, arr2)) {
    console.log(`${greenCheck} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


assertArraysEqual(letterPositions("hello").l, [2,3]);


/* expected output

{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

*/

/* AI feedback
Implement the letterPositions function
Great job! Your letterPositions function correctly creates an object with keys for each character in the string and values as arrays of the positions where each character appears. You've also correctly implemented the eqArrays and assertArraysEqual functions for testing purposes.

Your test case assertArraysEqual(letterPositions("hello").l, [2,3]); is correctly implemented and will correctly test whether the 'l' character in the string 'hello' appears at the indices 2 and 3.

One small suggestion for improvement:

In your letterPositions function, you're declaring const char = sentence[i]; inside the loop. While this is not incorrect, it would be more efficient to declare let char; before the loop and then just assign char = sentence[i]; inside the loop. This way, you're not creating a new constant on each iteration of the loop.

Keep up the good work!
*/

module.exports = letterPositions;