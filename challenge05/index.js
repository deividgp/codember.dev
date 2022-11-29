import fs from "fs";

const json = JSON.parse(fs.readFileSync("./challenge05/mecenas.json", "utf8"));

let index = 0;
let data = json.map((m, i) => m = m + "-" + i);

while (true) {
  if (data[index] != "X") {
    let index2 = index + 1;

    while (true) {
      if (data[index2] != "X") {
        data[index2] = "X";
        index = index2;
        break;
      }

      if (index2 == data.length - 1) {
        index2 = 0;
        continue;
      }

      index2++;
    }
  }

  if (data.filter((value) => value != "X").length == 1) {
    console.log(data.find((x) => x != "X"));
    break;
  }

  if (index == data.length - 1) {
    index = 0;
    continue;
  }

  index++;
}
