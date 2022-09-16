const Location = require("../Location");
const { displayCharacters } = require("../../displayCharacters");

class Field extends Location {
  constructor() {
    super(displayCharacters.field, false);
  }
}

module.exports = Field;
