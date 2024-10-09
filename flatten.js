// //assertArraysEqual => this will help me check against two arrays to see if they are equal

// const stopSign = "\u{1F6D1}"; // keeping my emojis
// const greenCheck = "\u{2705}";

// // eqArrays function that was copied over
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

// // eqArrays => this will check to see if what is provided are arrays, then compares if they are equal to each other

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

// // eqArrays function => this will check if the two arrays are equal from planned and actual

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


// //test code
// // assertEqual("Lighthouse Labs", "Bootcamp"); * from old code
// // assertEqual(1, 1); * from old code

// //i am nesting a function within a function, thats why the true/false paramters are inputted,
// // because it needs to check against what i know is true or false, and the code needs to validate that

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false




// create a function flatten which will take in an array containing elements including nested arrays of elements, and return a flattened version of the array

const flatten = function (arr) {
  // create an empty array to store the flattened result

  const result = []

  for (let i = 0; i < arr.length; i++) { // this allows me to the length of the parameter
    if (Array.isArray(arr[i])) {
      // If arr[i] is an array, we need to loop through it and push its elements into result
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]); // Push each element of the sub-array into result
      }
    } else {
      // If arr[i] is not an array, we can directly push it into result
      result.push(arr[i]); // Directly push non-array elements
    }
  }
  return result; // return the flattened array
};

// loop through each element in the input array
// if the element is an array
// loop through the nested array and add each element to the result
// otherwise, add teh element directly to the result
// return the flattened result

// expected test
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// so i need a loop to check everything
// i need to compare if something is an array first
// after writing all of this im not sure why i copied it over tbh...