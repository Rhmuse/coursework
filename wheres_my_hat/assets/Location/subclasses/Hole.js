const Location = require("../Location");
const { displayCharacters } = require("../../displayCharacters");

class Hole extends Location {
  constructor() {
    super(displayCharacters.hole, true);
  }

  handleEncounter(player) {
    player.toggleHasLost();
  }
}

module.exports = Hole;
