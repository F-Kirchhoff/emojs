import { readFileSync, writeFileSync } from "fs";
import { lookupTable } from "./lookupTable.js";
import { stringToCodeString } from "./utils.js";

export default function compile(fileName) {
  const data = readFileSync(fileName + ".emo").toString();
  const buffer = [];

  const categories = ["14", "11", "8", "7", "6", "5", "4", "3", "2", "1"];

  for (let i = 0; i < data.length; i++) {
    if (data[i].charCodeAt(0) < 9000) {
      buffer.push(data[i]);
      continue;
    }

    for (const length of categories) {
      const subString = data.substring(i, i + Number(length));

      const emoji = lookupTable[length].find(
        (element) =>
          element.code.join("") === stringToCodeString(subString).join("")
      );

      if (emoji) {
        buffer.push(emoji.name);
        i += Number(length) - 1;
        continue;
      }
    }
  }

  const compiledCode = buffer.join("");

  writeFileSync(fileName + ".js", compiledCode);
}

// helper functions
