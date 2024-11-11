const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []); // should pass, returns an empty array for single element array
assertArraysEqual(middle([1, 2]), []); // should pass, returns an empty array for two element array
assertArraysEqual(middle([1, 2, 3]), [2]); // should pass, returns [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass, returns [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass, returns [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass, returns [3, 4]
assertArraysEqual(middle([200,400,300,100,500]), [300]); // should pass, returns [300]
assertArraysEqual(middle([200,400,300,100,500,700,900,150]), [100, 500]); // should pass, returns [100, 500]