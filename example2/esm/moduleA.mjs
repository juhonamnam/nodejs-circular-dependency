import { b } from "./moduleB.mjs";

export const a = () => {
  console.log("a");
};

export const A = () => {
  b();
  console.log("A");
};
