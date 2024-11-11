const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head(["Lighthouse Labs", "Web Development"]), "Bootcamp");
assertEqual(head([1,2,3,4,5]), 1);
assertEqual(head([1]),1);
assertEqual(head([]), undefined);