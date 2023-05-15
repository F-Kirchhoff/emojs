import { readFileSync, writeFileSync } from "fs";
import { lookupTable } from "../lookupTable.js";
import { stringToCodeString } from "../utils.js";

export default function compile(fileName) {
  const data = readFileSync(fileName + ".emo").toString();
  const buffer = [];

  for (let i = 0; i < data.length; i++) {
    const subString = data.substring(i, i + 2);
    const subStringCode = stringToCodeString(subString);

    if (subStringCode.length < 10) {
      buffer.push(subString[0]);
      continue;
    }

    const foundEmoji = lookupTable.get(subStringCode);

    if (foundEmoji) {
      buffer.push(foundEmoji);
      i++;
      continue;
    }

    throw new Error(`Error: SubString ${subString} could not be parsed.`);
  }

  const compiledCode = buffer.join("");

  writeFileSync(fileName + ".js", compiledCode);
}

// helper functions
