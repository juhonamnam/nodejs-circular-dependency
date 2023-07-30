export const cjs = () =>
  import("./cjs/a.cjs").then(({ A }) => {
    A();
  });

export const esm = () =>
  import("./esm/a.mjs").then(({ A }) => {
    A();
  });
