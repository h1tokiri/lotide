const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); // single element array
  });

  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1, 2]), []); // two element array
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); // odd number of elements
  });

  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); //even number of elements
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []);
  });
});

// assertArraysEqual(middle([1]), []); // should pass, returns an empty array for single element array
// assertArraysEqual(middle([1, 2]), []); // should pass, returns an empty array for two element array
// assertArraysEqual(middle([1, 2, 3]), [2]); // should pass, returns [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass, returns [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass, returns [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should pass, returns [3, 4]
// assertArraysEqual(middle([200,400,300,100,500]), [300]); // should pass, returns [300]
// assertArraysEqual(middle([200,400,300,100,500,700,900,150]), [100, 500]); // should pass, returns [100, 500]