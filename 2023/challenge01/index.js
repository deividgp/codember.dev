import fs from "node:fs";

const data = fs.readFileSync("./challenge01/message_01.txt").toString();
const splitData = data.split(" ");
const words = [];

const addWord = (word) => {
  const index = words.findIndex((e) => e.word == word);

  if (index == -1) {
    words.push({
      word: word,
      count: 1,
    });
    return;
  }

  words[index].count++;
};

const formatWords = () => {
  let text = "";

  for (const word of words) {
    text += word.word + word.count;
  }

  return text;
};

for (const word of splitData) {
  addWord(word);
}

console.log(words);
console.log(formatWords());
