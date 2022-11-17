import fs from "fs";

const data = fs.readFileSync("encrypted.txt", "utf8");
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

  if (data[i] == "9") {
    code = code + data[i + 1];
    i = i + 2;
  } else if (data[i] == "1") {
    code = code + data[i + 1] + data[i + 2];
    i = i + 3;
  }
  sentence = sentence + String.fromCharCode(code);
}

console.log(sentence);
