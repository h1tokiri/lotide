const assertEqual = function (actual, expected) {
  const stopSign = "\u{1F6D1}";
  const greenCheck = "\u{2705}";


  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function countLetters

// step 1 - define the input for countLetters

const countLetters = function (input) {

  // step 2 - initialize an object to store the letter counts

  const letterCounts = {};

  // step 3 - loop through the string using a for...of loop

  for (let char of input) {
    if (char === ' ') {
      continue;
    }
    // step 4 - check and increment the count for each letter
    if (letterCounts[char]) {
      letterCounts[char]++;
    } else {
      letterCounts[char] = 1;
    }

  } // step 5 - return or print the letter counts
  return letterCounts;
};

//test code

// assertEqual(countLetters("lighthouse in the house"));

const printObject = (obj) => {
  for (const [key, value] of
    Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};

const result = countLetters("lighthouse in the house");
console.log(result);

console.log("actual result:");
printObject(result);

const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

console.log("Expected result:");
printObject(expected);

// assertEqual(result,expected);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false