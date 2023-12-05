// * Read the input.txt
var fs = require("fs");
var array = fs.readFileSync("input.txt").toString().split("\n");

// var array = [
//   "two1nine",
//   "eightwothree",
//   "abcone2threexyz",
//   "xtwone3four",
//   "4nineeightseven2",
//   "zoneight234",
//   "7pqrstsixteen",
// ];

// * Store all the line totals.
const totals = [];

// * Map of text nums. Index === number.
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

// * Num nums cos I am a num num.
const numNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// * Go through each line.
array.forEach((line) => {
  // * Store all the numbers.
  let nums = [];

  // * Store the line total.
  let totalOfLine = 0;

  // * Get all the integers from the line
  textNums.forEach((textNum, index) => {
    if (line.includes(textNum)) {
      const position = line.indexOf(textNum);
      if (position || position === 0) {
        nums[position] = textNums.indexOf(textNum);
      }
    }
  });

  numNums.forEach((numNum, index) => {
    if (line.includes(numNum)) {
      const position = line.indexOf(numNum);
      nums[position] = numNum;
    }
  });

  // * Remove any empty values
  const cleanNums = [];
  nums.forEach((num) => {
    if (!numNums.includes(num)) {
      return;
    }

    cleanNums.push(num);
  });

  // * If there are two numbers, concatenate them. Else just concatenate the first number twice.
  totalOfLine = parseInt(`${cleanNums[0]}${cleanNums[cleanNums.length - 1]}`);

  // * Push up the total we want to summize
  totals.push(totalOfLine);
});

// * Work out the total.
let result = 0;

for (let i = 0; i < totals.length; i++) {
  result += totals[i];
}

console.log(result);
