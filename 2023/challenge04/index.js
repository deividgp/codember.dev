import fs from "node:fs";

const data = fs
  .readFileSync("./challenge04/files_quarantine.txt")
  .toString()
  .split("\r\n");
const realFiles = [];

for (const row of data) {
  const splitRow = row.split("-");
  let lastIndex = 0;
  let real = true;

  for (const letter of splitRow[1]) {
    const index = splitRow[0].indexOf(letter, lastIndex);

    if (index == -1 || lastIndex > index) {
      real = false;
      break;
    }

    lastIndex = index;
  }

  if (real) realFiles.push(splitRow[1]);
}

console.log(realFiles[32]);
