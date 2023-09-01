const { b } = require("./moduleB.cjs");

exports.a = () => {
  console.log("function 'a' executed");
};

exports.A = () => {
  b();
  console.log("function 'A' executed");
};
