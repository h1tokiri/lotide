// original eqArrays and assertArraysEqual

const stopSign = "\u{1F6D1}"; // keeping my emojis
const greenCheck = "\u{2705}";

// eqArrays function that was copied over
const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(arr1, arr2) {
  //check if the arrays are equal using eqArrays
  if (eqArrays(arr1, arr2)) {
    console.log(`${greenCheck} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// 1. without takes two arrays, source + itemsToRemove, which will then give "source with removed items"
// 2. Need to loop through source arrays
// 3. For each element in source array, need to check if not present to remove in itemsToRemove array
// 4. If element not in itemsToRemove, then should be added to new array
// 5. Return new array without altering the original source array


// Step 1 - Define the without function

const without = function(source, itemsToRemove) {
  const result = [] // create a new array

  for (let i = 0; i < source.length; i++) { //loop through the source array
    if (!itemsToRemove.includes(source[i])) { // if the element is not in itemsToRemove
      result.push(source[i]); //add it to the result array
    }
  }
  return result; // return the new array
};


// test cases

assertArraysEqual(without([1, 2, 3], [1]), [2,3]); // Should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should pass

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // this returns as assertion passed because i don't include the without in here.