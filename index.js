// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = { // the commented our portions are implementing object shorthand
  head,//:   head,
  tail,//:   tail,
  middle,//: middle,
  assertArraysEqual,//: assertArraysEqual,
  assertEqual,//: assertEqual,
  eqArrays,//: eqArrays,
  assertObjectsEqual,//: assertObjectsEqual,
  countLetters,//: countLetters,
  countOnly,//: countOnly,
  eqObjects,//: eqObjects,
  findKey,//: findKey,
  findKeyByValue,//: findKeyByValue,
  flatten,//: flatten,
  letterPositions,//: letterPositions,
  map,//: map,
  takeUntil,//: takeUntil,
  without//: without
};