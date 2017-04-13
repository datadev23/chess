// specific moves for all the items
/* global window*/

// const move = (item = 'none', color = 'white') => {
//   if (item === 'pawn' && color === 'white') {
//     return 'First move';
//   }
//   return 'Wrong move';
// };
//
// class Moves {
//   constructor(itemVal = 'pawn') {
//     this.item = itemVal;
//   }
//   get currentMove() {
//     return this.move();
//   }
//   move() {
//     return `${move(this.item)} made`;
//   }
// }
/**
 * A
 * @type {[type]}
 */
class Pieces {
  constructor(side = 'white', defX, defY, inPlay) {
    this.x = defX;
    this.y = defY;
    this.side = side;
    this.inPlay = inPlay;
  }
  move() {
    this.x += 1;
    this.y += 1;
  }

  // get canvasPosition() {
  //   return this.side === 'black' ? [36, 210] : [35, 311];
  // }
}

class Pawns extends Pieces {
  move() {
    this.x += 1;
    this.y += 1;
  }
  get canvasPosition() {
    return this.side === 'black' ? [36, 210] : [35, 311];
  }
}
window.pawn = Pawns;
