import fs from "node:fs";

const data = fs
  .readFileSync("./challenge05/database_attacked.txt")
  .toString()
  .split("\r\n");
let message = "";

const isAlphanumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

const isEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

for (const row of data) {
  const splitRow = row.split(",");
  const id = splitRow[0];
  const username = splitRow[1];
  const email = splitRow[2];
  const age = splitRow[3];

  if (id == "" || !isAlphanumeric(id)) {
    message += username[0];
    continue;
  }

  if (username == "" || !isAlphanumeric(username)) {
    message += username[0];
    continue;
  }

  if (email == "" || !isEmail(email)) {
    message += username[0];
    continue;
  }

  if (age != "" && Number.isNaN(+age)) {
    message += username[0];
    continue;
  }
}

console.log(message);
