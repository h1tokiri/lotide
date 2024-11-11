const stopSign = "\u{1F6D1}"; // keeping my emojis
const greenCheck = "\u{2705}";

//eqArrays function
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

// assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
  //check if the arrays are equal using eqArrays
  if (eqArrays(arr1, arr2)) {
    console.log(`${greenCheck} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// takeUntil function
const takeUntil = function (array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've","been", "to", "Hollywood"]);