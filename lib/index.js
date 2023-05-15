import compile from "./compile.js";
import execute from "./execute.js";

const fileName = process.argv[2];

compile(fileName);
execute(fileName);
