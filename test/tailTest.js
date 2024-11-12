const assertEqual = require("../assertEqual");
const tail = require("../tail");

const assert = require('chai').assert;
// const head = require('../head');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });

  it("does not modify the original array", () => {
    const input = [1, 2, 3];
    tail(input); // call the function
    assert.deepEqual(input, [1, 2, 3]); //ensure the input array remains unchanged
  });

  it("returns [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for an array with one element", () => {
    assert.deepEqual(tail([1]), []);
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Liighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);