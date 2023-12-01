var fs = require("fs");
var array = fs.readFileSync("input.txt").toString().split("\n");

// * Store all the line totals.
const totals = [];

// * Go through each line.
array.forEach((line) => {
  // * Store all the numbers.
  const nums = [];

  // * Store the numbers we're going to use.
  const numsToSum = [];

  // * Store the line total.
  let totalOfLine = 0;

  // * Get all the integers from the line
  Array.from(line).forEach((char) => {
    if (parseInt(char)) {
      nums.push(parseInt(char));
    }
  });

  // * Grab the first and last numbers.
  const totalNums = nums.length;
  if (totalNums > 1) {
    numsToSum.push(nums[0]);
    numsToSum.push(nums[nums.length - 1]);
  } else {
    numsToSum.push(nums[0]);
  }

  // * If there are two numbers, concatenate them. Else just concatenate the first number twice.
  if (numsToSum[1]) {
    totalOfLine = parseInt(`${numsToSum[0]}${numsToSum[1]}`);
  } else {
    totalOfLine = parseInt(`${numsToSum[0]}${numsToSum[0]}`);
  }

  // * Push up the total we want to summize
  totals.push(totalOfLine);
});

// * Work out the total.
let result = 0;

for (let i = 0; i < totals.length; i++) {
  result += totals[i];
}
