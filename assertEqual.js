const stopSign = "\u{1F6D1}";
const greenCheck = "\u{2705}";

const assertEqual = function (actual, expected) {


  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;