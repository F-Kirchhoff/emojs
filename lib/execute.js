import { spawn } from "node:child_process";

export default function execute(fileName) {
  const exe = spawn("node", [fileName + ".js"]);

  exe.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  exe.stderr.on("data", (data) => {
    console.error(`${data}`);
  });
}
