/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let capitals = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let wordArray = word.split("");
  let count = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (capitals.includes(wordArray[i])) {
      count++;
    }
  }
  if (count == word.length) {
    return true;
  } else if (count == 1 && capitals.includes(wordArray[0])) {
    return true;
  } else if (count == 0) {
    return true;
  } else {
    return false;
  }
};
