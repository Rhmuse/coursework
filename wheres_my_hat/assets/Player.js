const { displayCharacters } = require("./displayCharacters");

class Player {
  constructor() {
    this.coordinates = { y: 0, x: 0 };
    this.displayCharacter = displayCharacters.player;
    this.hasWon = false;
    this.hasLost = false;
  }

  move(direction) {
    const isLegalMove = number => {
      if (number < 0) {
        return false;
      } else {
        return true;
      }
    };

    switch (direction) {
      case "n":
        if (isLegalMove(this.coordinates.y - 1)) {
          this.coordinates.y = this.coordinates.y - 1;
        } else {
          console.log("Please choose a legal direction.");
        }
        break;
      case "s":
        if (isLegalMove(this.coordinates.y + 1)) {
          this.coordinates.y = this.coordinates.y + 1;
        } else {
          console.log("Please choose a legal direction.");
        }
        break;
      case "e":
        if (isLegalMove(this.coordinates.x + 1)) {
          this.coordinates.x = this.coordinates.x + 1;
        } else {
          console.log("Please choose a legal direction.");
        }
        break;
      case "w":
        if (isLegalMove(this.coordinates.x - 1)) {
          this.coordinates.y = this.coordinates.x - 1;
        } else {
          console.log("Please choose a legal direction.");
        }
        break;
    }
  }

  toggleHasWon() {
    this.hasWon = !this.hasWon;
  }

  toggleHasLost() {
    this.hasLost = !this.hasLost;
  }

  handleWinOrLose() {
    if (this.hasWon) {
      console.log("You Win!");
    } else if (this.hasLost) {
      console.log("You Lose!");
    } else {
      return;
    }
  }
}

module.exports = Player;
