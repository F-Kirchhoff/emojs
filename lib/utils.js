export function stringToCodeString(string) {
  return string
    .split("")
    .map((char) => char.charCodeAt(0))
    .join("");
}
