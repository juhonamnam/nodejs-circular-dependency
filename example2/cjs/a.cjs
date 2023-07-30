const { b } = require("./b.cjs");

exports.a = () => {
  console.log("a");
};

exports.A = () => {
  b();
  console.log("A");
};
