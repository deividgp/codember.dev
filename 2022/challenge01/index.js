import fs from "fs";

const data = fs.readFileSync("./challenge01/users.txt", "utf8");
const splitData = data.split("\r\n");
let fields = 0;
let correctUsers = 0;
let lastCorrectUser = "";
let user = "";
/*
usr: username
eme: email
psw: password
age: age
loc: location
fll: number of followers
*/

splitData.forEach((element) => {
  if (element == "") {
    if (fields >= 6) {
      lastCorrectUser = user;
      correctUsers++;
    }

    fields = 0;
    user = "";
    return;
  }

  if (element.includes("usr:")) fields++;
  if (element.includes("eme:")) fields++;
  if (element.includes("psw:")) fields++;
  if (element.includes("age:")) fields++;
  if (element.includes("loc:")) fields++;
  if (element.includes("fll:")) fields++;
  user = user + element + " ";
});

console.log("LAST CORRECT USER: " + lastCorrectUser);
console.log("CORRECT USERS: " + correctUsers);
