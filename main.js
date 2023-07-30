import readline from "readline";

import * as example1 from "./example1/index.js";
import * as example2 from "./example2/index.js";

const getCmdInput = (message) =>
  new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.info(message);
    rl.on("line", (line) => {
      resolve(line);
      rl.close();
    });
  });

const validateMod = (mod) => ["cjs", "esm"].includes(mod);

const getExample = (ex) => {
  switch (ex) {
    case "example1":
      return example1;
    case "example2":
      return example2;
    default:
      throw new Error("Invalid example");
  }
};

const example = getExample(process.argv[2]);

const mod = process.argv[3];

if (validateMod(mod)) {
  example[mod]();
} else {
  const mod = await getCmdInput("Please enter the module type (cjs, esm):");
  if (validateMod(mod)) {
    await example[mod]();
  } else {
    console.error(`Invalid module type: ${mod}`);
  }
}
