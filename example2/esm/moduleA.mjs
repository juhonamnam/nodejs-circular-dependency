import { b } from "./moduleB.mjs";

export const a = () => {
  console.log("function 'a' executed");
};

export const A = () => {
  b();
  console.log("function 'A' executed");
};
