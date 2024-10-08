const assertEqual = function (actual, expected) {
  const stopSign = "\u{1F6D1}";
  const greenCheck = "\u{2705}";

  if (Array.isArray(actual) && Array.isArray(expected)) { // check if both are arrays\
    if (eqArrays(actual, expected)) {
      console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    // original
    if (actual === expected) {
      console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

// eqArrays function

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


//test code
// assertEqual("Lighthouse Labs", "Bootcamp"); * from old code
// assertEqual(1, 1); * from old code

//i am nesting a function within a function, thats why the true/false paramters are inputted,
// because it needs to check against what i know is true or false, and the code needs to validate that

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false