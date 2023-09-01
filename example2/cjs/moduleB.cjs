const { a } = require("./moduleA.cjs");

exports.b = () => {
  a();
  console.log("function 'b' executed");
};
