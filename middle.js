//assertArraysEqual => this will help me check against two arrays to see if they are equal

const stopSign = "\u{1F6D1}"; // keeping my emojis
const greenCheck = "\u{2705}";

// eqArrays function that was copied over

const eqArrays = require("./eqArrays");

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const assertArraysEqual = require("./assertArraysEqual");

// const assertArraysEqual = function(arr1, arr2) {
//   //check if the arrays are equal using eqArrays
//   if (eqArrays(arr1, arr2)) {
//     console.log(`${greenCheck} Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`${stopSign} Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should pass
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should fail

// eqArrays => this will check to see if what is provided are arrays, then compares if they are equal to each other

// const assertEqual = function (actual, expected) {
//   const stopSign = "\u{1F6D1}";
//   const greenCheck = "\u{2705}";

//   if (Array.isArray(actual) && Array.isArray(expected)) { // check if both are arrays\
//     if (eqArrays(actual, expected)) {
//       console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
//     }
//   } else {
// // LarryAI provided this update above instead of check if they're arrays, i can just do this:
// // if (eqArrays(actual, expected)) {
// //   console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
// // } else {
// //   console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
// // }


//     // original
//     if (actual === expected) {
//       console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
//     }
//   }
// };

// eqArrays function => this will check if the two arrays are equal from planned and actual

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


// just like last time, i do not know why i need to keep the previous codes other than to copy and paste; though the code example says i do need to keep it; that means it will probably need to run through the code in the future - will need to validate this against a mentor

// middle array will not return from an array with 1-2 parameters
// middle array will return number in median if array has an odd number of parameters
// middle array will return median - 1 and median + 1 if there is an even number of parameters in the array

// i will need to loop through every number in the array


const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 !== 0) { // confirm this is an odd number 
    const middleIndex = Math.floor((arr.length - 1) / 2); // calculate the middle index
    return [arr[middleIndex]]; // return the middle element in an array
  }

  if (arr.length % 2 === 0) {   // confirm this is an even number
    const firstMiddleIndex = (arr.length / 2) - 1;
    const secondMiddleIndex = arr.length / 2;
    return [arr[firstMiddleIndex], arr[secondMiddleIndex]];
  }
};

module.exports = middle;

// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

// what i submitted, twas incorrect so it will be commented out
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([200,400,300,100,500])); // => [300]

// console.log(middle([200,400,300,100,500,700,900,150])); // => [100, 500]


// replacing with assertArraysEqual, and then adding second array for it to compare against

// assertArraysEqual(middle([1]), []); // should pass, returns an empty array for single element array
// assertArraysEqual(middle([1, 2]), []); // should pass, returns an empty array for two element array
// assertArraysEqual(middle([1, 2, 3]), [2]); // should pass, returns [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass, returns [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass, returns [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass, returns [3, 4]
// assertArraysEqual(middle([200,400,300,100,500]), [300]); // should pass, returns [300]
// assertArraysEqual(middle([200,400,300,100,500,700,900,150]), [100, 500]); // should pass, returns [100, 500]


// now that i have this, need to figure out how to pass it through the other 2 functions i brought in, not sure why i brought them in but it seems they want me to do that

/* from larry ai

Implement the middle function
Great job on implementing the middle function! Your function correctly handles arrays of different lengths and returns the middle elements as expected. Your code is clean, well-organized, and your use of comments to explain your thought process is excellent.

However, you seem to have missed one of the requirements. The requirement states that you should use the assertArraysEqual function to test the middle function. Currently, you're using console.log to print the output of the middle function, but you're not actually checking if the output is correct.

Here's a small section of your code:

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([200,400,300,100,500])); // => [300]
You could modify this to use assertArraysEqual like so:

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([200,400,300,100,500]), [300]);
This way, you're not just printing the output of the middle function, but also verifying that it's correct.

Keep going! Your submission seems like it might be missing something. Take a look at the requirement about using assertArraysEqual to test your middle function.


*/