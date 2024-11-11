const stopSign = "\u{1F6D1}"; // keeping my emojis
const greenCheck = "\u{2705}";

const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  //check if the arrays are equal using eqArrays
  if (eqArrays(arr1, arr2)) {
    console.log(`${greenCheck} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;