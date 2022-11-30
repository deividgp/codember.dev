const passwords = [];

for (let index = 11155; index <= 55999; index++) {
  const number = index.toString();

  if (!number.includes("55")) continue;

  for (let index2 = 0; index2 + 1 < number.length; index2++) {
    if (number[index2] > number[index2 + 1]) break;

    if (index2 == 3) passwords.push(number);
  }
}

console.log(
  "NUMBER OF PASSWORDS: " +
    passwords.length +
    " PASSWORD INDEX 55: " +
    passwords[55]
);
