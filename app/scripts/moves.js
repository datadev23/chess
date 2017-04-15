// specific moves for all the items
/* global window*/

/**
 * A Base class for all Pieces
 * @type {String}
 */
class Pieces {
  constructor(defX, defY, side = 'white', inPlay = true) {
    this.x = defX;
    this.y = defY;
    this.side = side;
    this.inPlay = inPlay;
  }
  render(spriteImage, ctx) {
    spriteImage.draw(ctx, this.canvasPosition, this.x, this.y);
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
