// * Read the input.txt
var fs = require("fs");
var puzzleInput = fs.readFileSync("input.txt").toString().split("\n");

// * Helper function to get the quantity from a string. Removes everything but the numbers.
function getQuantity(string) {
  return parseInt(string.replace(/\D/g, ""));
}

// * Store the colour names.
const colours = ["blue", "red", "green"];

// * Store the elf's maxmiums
const elfMaxes = {
  red: 12,
  green: 13,
  blue: 14,
};

// * Create an array to store all the data for each game.
const gamesArray = [];

// * Loop through the games, create an array of colours and their counts.
puzzleInput.forEach((line, gameNumber) => {
  const game = line.split(":");
  const gameData = game[1];
  const subGamesRaws = gameData.split(";");

  gamesArray[gameNumber] = [];
  subGamesRaws.forEach((rawSubGame, subGameNumber) => {
    rawSubGame.split(",").forEach((numColoursString) => {
      colours.forEach((colour) => {
        if (numColoursString.includes(colour)) {
          if (!gamesArray[gameNumber][subGameNumber]) {
            gamesArray[gameNumber][subGameNumber] = {
              red: 0,
              blue: 0,
              green: 0,
            };
          }
          gamesArray[gameNumber][subGameNumber][colour] =
            getQuantity(numColoursString);
        }
      });
    });
  });
});

// * Get the highest number of each colour in each game.
gamesArray.forEach((game, gameNumber) => {
  const gameMaxColours = {
    red: 0,
    blue: 0,
    green: 0,
  };
  game.forEach((subGame) => {
    Object.keys(gameMaxColours).forEach((colour) => {
      if (subGame[colour] > gameMaxColours[colour]) {
        gameMaxColours[colour] = subGame[colour];
      }
    });
  });

  gamesArray[gameNumber] = gameMaxColours;
});

// * Part 1
// * Check which of these games are possible.
// * Then sum up the possible IDs.
let partOneAnswer = 0;

gamesArray.forEach((game, gameNumber) => {
  let possibleGame = true;
  colours.forEach((colour) => {
    if (elfMaxes[colour] < game[colour]) {
      possibleGame = false;
    }
  });
  if (possibleGame) {
    partOneAnswer += gameNumber + 1;
  }
});

let partTwoAnswer = 0;

// * Part 2
// * Total the powers of all colours for each game
gamesArray.forEach((game) => {
  partTwoAnswer += game.red * game.blue * game.green;
});

// * Bingo!
console.log(partOneAnswer);
console.log(partTwoAnswer);
