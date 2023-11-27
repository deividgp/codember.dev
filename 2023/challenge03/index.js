import fs from "node:fs";

const data = fs
  .readFileSync("./challenge03/encryption_policies.txt")
  .toString()
  .split("\n");
const invalidKeys = [];

for (const row of data) {
  const splitRow = row.split(": ");
  const policy = splitRow[0];
  const key = splitRow[1];
  const splitPolicy = policy.split(" ");
  const range = splitPolicy[0].split("-");
  const letter = splitPolicy[1];
  const keyMatch = key.match(new RegExp(letter, "g"));

  if (keyMatch == null) {
    invalidKeys.push(key);
    continue;
  }

  const matchLength = keyMatch.length;

  if (matchLength >= Number(range[0]) && matchLength <= Number(range[1]))
    continue;

  invalidKeys.push(key);
}

console.log(invalidKeys[41]);
