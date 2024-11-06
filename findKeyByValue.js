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

const findKeyByValue = function (object, value) { // new function
  const keys = Object.keys(object); // get the keys in object to be outputted to array 
  for (const key of keys) { // for..of loop
    if (object[key] === value) { // if the key in the current loop matches the value i indicate in my assertEqual; then confirm or deny
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false