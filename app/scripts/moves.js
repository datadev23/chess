// specific moves for all the items
/* global window*/

const move = (item = 'none', color = 'white') => {
  if (item === 'pawn' && color === 'white') {
    return 'First move';
  }
  return 'Wrong move';
};

class Moves {
  constructor(itemVal = 'pawn') {
    this.item = itemVal;
  }
  get currentMove() {
    return this.move();
  }
  move() {
    return `${move(this.item)} made`;
  }
}

window.moves = Moves;
