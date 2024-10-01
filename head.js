const assertEqual = function(actual, expected) {
  const stopSign = "\u{1F6D1}";
  const greenCheck = "\u{2705}";


  if (actual === expected) {
    console.log(`${greenCheck} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(array) {
  return array[0];
};

assertEqual(head(["Lighthouse Labs", "Web Development"]), "Bootcamp");
assertEqual(head([1,2,3,4,5]), 1);
assertEqual(head([1]),1);
assertEqual(head([]), undefined);