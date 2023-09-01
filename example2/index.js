export const cjs = () =>
  import("./cjs/moduleA.cjs").then(({ A }) => {
    A();
  });

export const esm = () =>
  import("./esm/moduleA.mjs").then(({ A }) => {
    A();
  });
