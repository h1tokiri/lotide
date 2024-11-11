// const assertEqual = function(actual, expected) {
//   const stopSign = "\u{1F6D1}";
//   const greenCheck = "\u{2705}";


//   if (actual === expected) {
//     console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require("./assertEqual");

const head = function(array) {
  return array[0];
};

module.exports = head;