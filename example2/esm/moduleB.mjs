import { a } from "./moduleA.mjs";

export const b = () => {
  a();
  console.log("b");
};
