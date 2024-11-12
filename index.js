// // const studentName = 'alice';
// // const cohort = 'sep 23 2024';
// // const hasGraduated = false;

// const { lstat } = require("fs")

// // const studentOne = ['alice', 'sep 23 2024', false];

// // // const studentOneObj = {studentName: 'alice', cohort: 'sep 23 2024', hasGraduated: false };

// // const studentOneObj = {
// //   studentName: 'alice',
// //   cohort: 'sep 23 2024',
// //   hasGraduated: false
// // };

// // console.log(studentOneObj);

// // console.log(studentOneObj['studentName']);


// // const myNum = 10;

// // const changeMyNum = function (num) {
// //   num = 42;
// //   console.log('inside the function', num); // 42
// // }

// // changeMyNum(myNum);

// // console.log(myNum);


// const dog = {
//   breed: 'labrador',
//   name: 'benji',
//   age: 12,
//   goForWwalk: function () {
//     console.log('go for a fun walk!');
//   },
//   celebrateBirthday: function () {
//     dog.age = 13;
//   }
// };

// const console = {
//   log: function() {}
// };

// console.log(dog);
// dog.celebrateBirthday();
// console.log(dog);


//        arrays objects
// c-style  Y       N
// for..of  Y       N
// for..in  Y       Y

//
// const arr = ['a', 'b', 'c'];

// for (const index in arr) {
//   console.log('index', index);
// }

// console.log();

// const house = {
//   address: '123 Fake Street',
//   cleanliness: 2,
//   forSale: false,
// };

// for (const key in house) {
//   console.log('key', key);
//   console.log('value', house[key]); // must  use [] brackets instead of house.key, because the key is a variable
// }

// const names = ['alice', 'bob', 'carol'];

// const ourForEach = function (arr, callback) {
//   // loop through the provided array
//   for(let i = 0; i < arr.length; i++) {
//     // call the provided callback once for each element
//     const element = arr[i];
//     callback(element,i,arr);
//   }
// };

// const doOnEachLoop = function (name, index, ogArray) {
//   console.log(name, index, ogArray);
// };

// names.forEach(doOnEachLoop);

// ourForEach(names, doOnEachLoop);

// arrow function conversion
// const names = ['alice', 'bob', 'carol'];

// const ourForEach = (arr, callback) => {
//   // loop through the provided array
//   for (let i = 0; i < arr.length; i++) {
//     // call the provided callback once for each element
//     const element = arr[i];
//     callback(element, i, arr);
//   }
// };

// const doOnEachLoop = (name, index, ogArray) => console.log(name, index, ogArray);

// names.forEach(doOnEachLoop);

// ourForEach(names, doOnEachLoop);



// const something = require('assert'); // can use net, http, assert, etc. this is a function
// // console.log('something', something);

// // assert.strictEqual() // when comparing '2' to 2, wont work

// const sayHello = function(name) {
//   // console.log(`hello there ${name}`);
//   return `hello there ${name}`;
// };

// // const returnVal = sayHello('alice');
// // console.log('returnVal', returnVal);

// // something wrong with my code here and not sure why its not working

// const actual = sayHello('bob');

// const expected = 'hello there bob';

// // const result = actual === expected;
// // console.log('result', result);

// const assertEqual = function(actual, expected) { // this will be come very common in course moving forward
//   if (actual === expected) {
//     console.log('they are equal');
//   } else {
//     console.log('not equal');
//   }
// };

// assertEqual(actual,expected);

// // actual versus expected 4*8
// // expected 32
// // actual 27


//functions

// //regular function
// function aRandomFunction() {
//   console.log("hello world!");
// }

// // const aRandomFunctionDeclaration = () => {

// // }

// // //arrow function
// // const aRandomArrowFunction = () => {
// //   console.log("I am within an arrow function");
// // }

// // callback? -> a function taht gets called within another function



// // higher order function? -> a function that takes in another function aka callback

// const aHigherOrderFunction = (callback) => {
//   callback();
// }

// //calling a function -> invoking
// aHigherOrderFunction(aRandomFunction);
// // refer to a function -> reference
// aHigherOrderFunction



///------

//asynchronous -> opposite, events can happen but on their own time
//synchronous -> events happening in sync, one after anohter

// non-blocking
// function A -> 5 seconds
// function B -> 10 minutes
// function c -> 1 minute

// async -> will not pause other functions
// something happening at the same time

// A()
// B()
// C()

// blocking 
// sync -> will pause the execution of other functions
//porcesses that happen one at a time

//A() -> B() -> C()

// two types of function
//blocking
//non-blocking

// we have learned non-blocking this entire time, moving to blocking


// setTimeout
// async function non-blocking
// its a timer

// // setTimeout(() => console.log("welcome to async code!"), 1000);
// setTimeout(() => console.log("welcome to async"), 5000); // 3000 = milseconds, so 5 seconds
// console.log("this a sync, blocking function");
// setTimeout(() => console.log("another timeout"), 3000); // 3000 = ms, so 3 seconds
// console.log("last log");


// const higherOrderFunc = function (callback) {
//   const data = { initials: "BG" };

//   console.log("Before timeout call");
//   setTimeout(() => {
//     data.initials = "BPG";
//     console.log(data.initials);
//     callback();
//   });
//   console.log("after timeout call");
// };

// console.log("before main call");
// const result = higherOrderFunc(() => {
//   console.log("inside callback");
// });

// console.log("after main call");

// order
// before main call (declared, not called)
// before timeout call
// after timeout call
// after main call
// BPG (initials)
// inside callback

// const numbers = [900, 2, -52, 0, 603, 59, 81, 1];

// // order the array
// // console log the numbers from lowest to highest
// // loop through this array

// // sort the array

// const sortedArray = numbers.sort()
// // console.log(sortedArray);

// for(let number of sortedArray) { // gets us from lowest to highlight and giving each number individually
//   console.log(number);
// };

// const randomInterval=setInterval(()=>console.log("hello world"), 2000)
// setTimeout(()=>clearInterval(randomInterval), 7000); // this only lets it run 3x, runs every 2 seconds, ends at the 7 second mark. useful for reminders based on time

// // create a function that goes through a string very slowly
// const stringExample = "hello world\n"
// //loop hthrough this string, and console.log each letter
// // how do we loop through a string?

// // we want it to increment slowly

// let timer = 1000;
// for (let i = 0; i < stringExample.length; i++) {
//   setTimeout(() => process.stdout.write(stringExample.charAt(i)), timer);
//   timer = timer + 1000;
// };

// //this will result in each word coming out at 1 second each

//--------------
//fs? filesystem?
// a node module that allows us to interact with the file system

// const fs = require("fs").promises; //use fs.promises for promise-based methods (What is that)?

// fs.readFile(filePath,'utf-8',(err, data) => {

// });