const assertEqual = require("../assertEqual");
const head = require("../head");

// assertEqual(head(["Lighthouse Labs", "Web Development"]), "Bootcamp");
// assertEqual(head([1,2,3,4,5]), 1);
// assertEqual(head([1]),1);
// assertEqual(head([]), undefined);

const assert = require('chai').assert;
// const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});