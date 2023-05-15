import compile from "./lib/compile.js";
import execute from "./execute.js";

const fileName = process.argv[2];

compile(fileName);
execute(fileName);
