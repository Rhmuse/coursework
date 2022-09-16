class Location {
  constructor(defaultDisplayCharacter, hasEncounter) {
    this._defaultDisplayCharacter = defaultDisplayCharacter;
    this.displayCharacter = defaultDisplayCharacter;
    this.hasEncounter = hasEncounter;
    this.isOccupied = false;
  }
  toggleIsOccupied() {
    this.isOccupied = !this.isOccupied;
  }
  setDisplayCharacter(character) {
    this.displayCharacter = character;
  }
  setToDefaultDisplayCharacter() {
    this.displayCharacter = this._defaultDisplayCharacter;
  }
}

module.exports = Location;
