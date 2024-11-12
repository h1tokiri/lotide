const stopSign = "\u{1F6D1}";
const greenCheck = "\u{2705}";

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false; // objects cannot be equal if they have a different # of keys
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      //compare arrays using eqArrays)
      if (!eqArrays(value1, value2)) {
        return false; //arrays are not equal
      }
    } else if (value1 !== value2) {
      //compare primitive values
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  const result = eqObjects(actual, expected);
  if (result) {
    // console.log(`${greenCheck} Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    console.log(`${greenCheck} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // console.log(`${stopSign} Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    console.log(`${stopSign} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
assertObjectsEqual(obj1, obj2);

const obj3 = { a: 1, b: 2, c: 3 };
assertObjectsEqual(obj1, obj3);

module.exports = assertObjectsEqual;