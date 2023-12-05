// * Read the input.txt
var fs = require("fs");
var puzzleInput = fs.readFileSync("input.txt").toString().split("\n");

// * Array of text nums. Index will equal the integer version.
const textNums = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// * Prepare a var to store each line of just numbers
const linesOfNums = [];

puzzleInput.forEach((line, index) => {
  // * Create a string to contain text chars.
  let buildString = "";

  // * Create an array to store the numbers found in each line.
  const lineNums = [];
  const lineLength = line.length;

  for (let i = 0; i < lineLength; i++) {
    const char = line[i];

    if (parseInt(char)) {
      // * Thar be a number!
      lineNums.push(parseInt(char));
    } else {
      buildString += char;

      textNums.forEach((textNum, index) => {
        if (buildString.includes(textNum)) {
          // * Hit a text number.
          lineNums.push(index);
          buildString = "";

          // * Go back a step to account for bullshittery like "oneight". Absolute bullshittery.
          i--;
        }
      });
    }
  }

  // * Reset ready for the next line.
  buildString = "";

  linesOfNums.push(lineNums);
});

// * Get the first and last numbers ready to be totalled.
let totals = [];

linesOfNums.forEach((line) => {
  totals.push(parseInt(`${line[0]}${line[line.length - 1]}`));
});

// * Work out the final total, thank fuck.
let finalTotal = 0;

totals.forEach((total) => {
  finalTotal += total;
});

console.log(finalTotal);
