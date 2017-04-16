/* global window,document,alert,$*/
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderBoard"] }] */
/* eslint no-mixed-operators: ["error",
  {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}]*/
const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
const Resources = window.Resources;
const Pawn = window.Pawns;
const resources = new Resources();
const SpriteImage = window.SpriteImage;
let spriteImage;

// const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numCols = 8;
const numRows = 8;
// const rows = [1, 2, 3, 4, 5, 6, 7, 8];
const drawPawns = (white, black, ctx, boardDimension, allPieces) => {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7];
  const cols = [1, 6];
  let pawn;
  let side;

  cols.forEach((col) => {
    rows.forEach((row) => {
      side = col === 1 ? 'black' : 'white';
      pawn = new Pawn(row * boardDimension + 30, col * boardDimension + 5, side, true);
      spriteImage.draw(ctx, pawn.canvasPosition, pawn.x, pawn.y);
      allPieces.push(pawn);
    });
  });
};
// let currentTile = {};
// currentTile = { chess: 'val' };
let ctx = {};
// let blackTile = '';
class Engine {
  constructor() {
    // document.addEventListener('click', this.boardClick.bind(this));
  }
  load() {
    print('Engine load function called');

    const doc = document;
    // const win = window;
    const canvas = doc.createElement('canvas');
    if (!canvas) {
      Utils.alert('Canvas is not supported');
      return;
    }

    this.boardDimension = 90;
    this.spriteSheet = 'images/ChessBoardSpriteSheet.png';
    this.allPieces = [];

    ctx = canvas.getContext('2d');
    resources.loadAll(this.spriteSheet);
    // resources.loadPieces([this.pawnImageB, this.pawnImageW]);
    resources.onReady({ func: this.renderBoard, self: this });
    canvas.width = 720;
    canvas.height = 720;
    doc.getElementById('chessBoard').appendChild(canvas);
    canvas.addEventListener('click', this.boardClick.bind(this), false);
    this.loaded = true;
  }
  renderBoard(self) {
    let row;
    let col;
    spriteImage = new SpriteImage(
      resources.get(self.spriteSheet),
      self.boardDimension,
      self.allPostions,
    );
    for (row = 0; row < numRows; row += 1) {
      for (col = 0; col < numCols; col += 1) {
        if (row % 2 === 0) {
          if (col % 2 === 0) {
            ctx.fillStyle = 'white';
            ctx.fillRect(
              col * self.boardDimension,
              row * self.boardDimension,
              self.boardDimension,
              self.boardDimension,
            );
          } else {
            ctx.fillStyle = '#800000';
            ctx.fillRect(
              col * self.boardDimension,
              row * self.boardDimension,
              self.boardDimension,
              self.boardDimension,
            );
          }
        } else if (row % 2 !== 0) {
          if (col % 2 === 0) {
            ctx.fillStyle = '#800000';
            ctx.fillRect(
              col * self.boardDimension,
              row * self.boardDimension,
              self.boardDimension,
              self.boardDimension,
            );
          } else {
            ctx.fillStyle = 'white';
            ctx.fillRect(
              col * self.boardDimension,
              row * self.boardDimension,
              self.boardDimension,
              self.boardDimension,
            );
          }
        }
      }
    }
    self.drawDefaultPieces();
    self.renderAllPieces();
  }
  renderAllPieces() {
    this.allPieces.forEach(piece => piece.render(spriteImage, ctx));
  }
  boardClick(evt) {
    // get cell coordinates
    const cellX = Math.floor(evt.clientX / this.boardDimension);
    const cellY = Math.floor(evt.clientY / this.boardDimension);

    const piece = this.allPieces.find(p => p.x === cellX && p.y === cellY);

    if (piece) {
      // a piece was clicked
      print(piece);
    } else {
      print('Nothing has been CLicked');
      // an empty cell was clicked
    }
  }
  drawDefaultPieces() {
    drawPawns(this.wPawnPos, this.bPawnPos, ctx, this.boardDimension, this.allPieces);
  }
}

window.engine = Engine;
