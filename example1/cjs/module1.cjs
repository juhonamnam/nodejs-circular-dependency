const { b } = require("./module2.cjs");

const a = 100;

exports.a = a;

console.log(`In module 1, a == ${a} and b == ${b}`);
