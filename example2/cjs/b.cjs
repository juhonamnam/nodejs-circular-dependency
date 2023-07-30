const { a } = require("./a.cjs");

exports.b = () => {
  a();
  console.log("b");
};
