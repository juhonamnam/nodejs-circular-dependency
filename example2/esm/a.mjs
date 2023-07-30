import { b } from "./b.mjs";

export const a = () => {
  console.log("a");
};

export const A = () => {
  b();
  console.log("A");
};
