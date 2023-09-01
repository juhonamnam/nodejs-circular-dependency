const { b } = require("./moduleB.cjs");

const a = 100;

exports.a = a;

console.log(`In module A, a == ${a} and b == ${b}`);
