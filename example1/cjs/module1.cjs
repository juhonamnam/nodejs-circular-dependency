const { b } = require("./module2.cjs");

const a = 100;

exports.a = a;

console.log(`in module a, a == ${a} and b == ${b}`);
