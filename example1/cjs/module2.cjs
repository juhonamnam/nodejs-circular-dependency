const { a } = require("./module1.cjs");

const b = 5000;

exports.b = b;

console.log(`in module b, a == ${a} and b == ${b}`);
