// original assertEqual function
const assertEqual = function (actual, expected) {
  const stopSign = "\u{1F6D1}";
  const greenCheck = "\u{2705}";


  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// //test code
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

const countOnly = function (allItems, itemsToCount) {

  const results = {};

  for (const item of allItems) {
    console.log(item);

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;