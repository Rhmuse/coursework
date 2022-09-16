const Location = require("../Location");
const { displayCharacters } = require("../../displayCharacters");

class Hat extends Location {
  constructor() {
    super(displayCharacters.hat, true);
  }
  handleEncounter(player) {
    player.toggleHasWon();
  }
}

module.exports = Hat;
