const prompt = require("prompt-sync")({ sigint: true });

const Hat = require("./Location/subclasses/Hat");
const Hole = require("./Location/subclasses/Hole");
const Field = require("./Location/subclasses/Field");
const { displayCharacters } = require("./displayCharacters");

const randomNumber = max => {
  return Math.floor(Math.random() * max);
};

class Map {
  constructor() {
    this._mapTemplate = [];
    this.playerLocation = { x: 0, y: 0 };
    this.processedMap = [];
  }

  processMapTemplate() {
    // Proccess the characters into their class equivilant and make a class based map.
    let processedMap = [];
    this._mapTemplate.forEach(row => {
      let processedRow = [];
      for (let i = 0; i < row.length; i++) {
        switch (row[i]) {
          case displayCharacters.field:
            processedRow.push(new Field());
            break;
          case displayCharacters.hat:
            processedRow.push(new Hat());
            break;
          case displayCharacters.hole:
            processedRow.push(new Hole());
            break;
          case displayCharacters.player:
            const startingSpot = new Field();
            startingSpot.toggleIsOccupied();
            startingSpot.setDisplayCharacter(displayCharacters.player);
            processedRow.push(startingSpot);
            break;
          default:
            eval(`const field${i} = new Field();
              processedRow.push(field${i});`);
            console.log(`unrecognized character :${row[i]}`);
            break;
        }
      }
      processedMap.push(processedRow);
      this.processedMap = processedMap;
    });
  }

  renderMap() {
    let renderedMap = "";
    this.processedMap.forEach(row => {
      let renderedRow = "";
      row.forEach(location => {
        renderedRow = renderedRow + location.displayCharacter;
      });
      renderedMap = renderedMap + renderedRow + "\n";
    });
    console.log(renderedMap);
  }

  updateMap(coordinates) {
    let startingLocation =
      this.processedMap[this.playerLocation.y][this.playerLocation.x];
    let endingLocation = this.processedMap[coordinates.y][coordinates.x];
    this.setPlayerLocation(coordinates);

    startingLocation.toggleIsOccupied();
    startingLocation.setToDefaultDisplayCharacter();
    endingLocation.toggleIsOccupied();
    endingLocation.setDisplayCharacter(displayCharacters.player);
  }

  setPlayerLocation(coordinates) {
    this.playerLocation = { x: coordinates.x, y: coordinates.y };
  }

  generateMapTemplate(height = 3, length = 3, percentageOfHoles = 20) {
    let generatedMap = [];

    for (let rowNumber = 1; rowNumber <= height; rowNumber++) {
      let generatedRow = [];

      for (let lengthOfRow = 1; lengthOfRow <= length; lengthOfRow++) {
        let percentage = randomNumber(100);

        if (percentage <= percentageOfHoles) {
          generatedRow.push(displayCharacters.hole);
        } else {
          generatedRow.push(displayCharacters.field);
        }
      }
      generatedMap.push(generatedRow);
    }
    let hatYCoordinate = randomNumber(height);
    let hatXCoordinate = randomNumber(length);

    while (hatYCoordinate === 0) {
      if (hatYCoordinate === 0) {
        hatYCoordinate = randomNumber(height);
      }
    }
    generatedMap[0][0] = displayCharacters.player;
    generatedMap[hatYCoordinate][hatXCoordinate] = displayCharacters.hat;
    this._mapTemplate = generatedMap;
  }

  async askForDirection() {
    console.log("Which direction would you like to go?");
    let direction = await prompt("n, s, e, w:");
    return direction;
  }
}

module.exports = Map;
