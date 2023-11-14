import fs from "node:fs";

const data = fs.readFileSync("./challenge02/message_02.txt").toString();
let number = 0;
let result = "";

for (const symbol of data) {
  //"#" Incrementa el valor numérico en 1.
  //"@" Decrementa el valor numérico en 1.
  //"*" Multiplica el valor numérico por sí mismo.
  //"&" Imprime el valor numérico actual.
  switch (symbol) {
    case "#":
      number++;
      break;
    case "@":
      number--;
      break;
    case "*":
      number *= number;
      break;
    case "&":
      console.log(number);
      result += number.toString();
      break;
  }
}

console.log(result);
