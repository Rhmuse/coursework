const Map = require("./assets/Map");
const Player = require("./assets/Player");

const run = async () => {
  const myMap = new Map();

  const PlayerOne = new Player();

  myMap.generateMapTemplate();
  myMap.processMapTemplate();

  console.log(myMap.processedMap);

  let currentLocation =
    myMap.processedMap[myMap.playerLocation.y][myMap.playerLocation.x];

  while (!PlayerOne.hasWon && !PlayerOne.hasLost) {
    myMap.renderMap();

    direction = await myMap.askForDirection();

    PlayerOne.move(direction);

    myMap.updateMap(PlayerOne.coordinates);

    currentLocation =
      myMap.processedMap[myMap.playerLocation.y][myMap.playerLocation.x];

    if (currentLocation.hasEncounter) {
      currentLocation.handleEncounter(PlayerOne);
    }

    PlayerOne.handleWinOrLose();
  }
};

module.exports = run;
