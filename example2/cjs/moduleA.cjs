const { b } = require("./moduleB.cjs");

exports.a = () => {
  console.log("a");
};

exports.A = () => {
  b();
  console.log("A");
};
