const { a } = require("./moduleA.cjs");

const b = 5000;

exports.b = b;

console.log(`In module B, a == ${a} and b == ${b}`);
