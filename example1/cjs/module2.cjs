const { a } = require("./module1.cjs");

const b = 5000;

exports.b = b;

console.log(`In module 2, a == ${a} and b == ${b}`);
