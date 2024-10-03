const assertEqual = function(actual, expected) {
  const stopSign = "\u{1F6D1}";
  const greenCheck = "\u{2705}";


  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Liighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);