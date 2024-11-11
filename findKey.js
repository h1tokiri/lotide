const stopSign = "\u{1F6D1}";
const greenCheck = "\u{2705}";

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  const keys = Object.keys(object); // get all the keys in the object
  for (const key of keys) { // for of loop through the keys
    if (callback(object[key])) { // check the callback for the current value
      return key; // return the key if the callback is truthy
    }
  }
  return undefined; // return undefined if no key matches
};

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(result, "noma");