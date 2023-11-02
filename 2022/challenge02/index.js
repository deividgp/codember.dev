import fs from "fs";

const data = fs.readFileSync("./challenge02/encrypted.txt", "utf8");
let code = "";
let sentence = "";
let i = 0;

while (i < data.length) {
  if (data[i] == " ") {
    sentence = sentence + " ";
    i++;
    continue;
  }

  code = data[i];

  if (data[i] == "1") {
    code = code + data[i + 1] + data[i + 2];
    i = i + 3;
  } else {
    code = code + data[i + 1];
    i = i + 2;
  }
  sentence = sentence + String.fromCharCode(code);
}

console.log(sentence);
