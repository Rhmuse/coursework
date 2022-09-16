const prompt = require("prompt-sync")({ sigint: true });
const run = require("./run.js");

const start = () => {
  let readyToPlay = "undecided";

  console.log("Would you like to play a game?");
  readyToPlay = prompt("y/n:");

  if (readyToPlay.toLowerCase() === "y" || readyToPlay.toLowerCase() === "n") {
    run();
  } else {
    console.log("Please type y or n.");
  }
};

start();
