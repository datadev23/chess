/* global window,document,alert,$*/
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderBoard"] }] */
/* eslint no-mixed-operators: ["error",
  {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}]*/
const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
const Resources = window.Resources;
const resources = new Resources();
const SpriteImage = window.SpriteImage;
let spriteImage;
// const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numCols = 8;
const numRows = 8;
// const rows = [1, 2, 3, 4, 5, 6, 7, 8];
const drawPawns = (white, black, ctx, boardDimension) => {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7];
  const cols = [1, 6];
  // const updatedDimensions = boardDimension / 2 - 15;
  cols.forEach((col) => {
    rows.forEach((row) => {
      if (col === 1) {
        spriteImage.draw(ctx, 'bPawn', row * boardDimension + 30, col * boardDimension + 5);
      } else {
        spriteImage.draw(ctx, 'wPawn', row * boardDimension + 30, col * boardDimension + 5);
      }
    });
  });
};
// let currentTile = {};
// currentTile = { chess: 'val' };
let ctx = {};
// let blackTile = '';
class Engine {
  constructor() {
    this.blackTile = '';
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
    this.allPostions = [];
    this.boardDimension = 90;
    this.spriteSheet = 'images/ChessBoardSpriteSheet.png';
    this.bPawnPos = [36, 210];
    this.wPawnPos = [35, 311];
    this.darkTile = [5, 5];
    this.lightTile = [390, 5];
    this.allPostions.push({ name: 'darkTile', val: this.darkTile });
    this.allPostions.push({ name: 'lightTile', val: this.lightTile });
    this.allPostions.push({ name: 'bPawn', val: this.bPawnPos });
    this.allPostions.push({ name: 'wPawn', val: this.wPawnPos });

    ctx = canvas.getContext('2d');
    resources.loadAll(this.spriteSheet);
    // resources.loadPieces([this.pawnImageB, this.pawnImageW]);
    resources.onReady({ func: this.renderBoard, self: this });
    canvas.width = 720;
    canvas.height = 720;
    doc.getElementById('chessBoard').appendChild(canvas);

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
            spriteImage.draw(ctx, 'darkTile', col * self.boardDimension, row * self.boardDimension);
          } else {
            spriteImage.draw(
              ctx,
              'lightTile',
              col * self.boardDimension,
              row * self.boardDimension,
            );
          }
        } else if (row % 2 !== 0) {
          if (col % 2 === 0) {
            spriteImage.draw(
              ctx,
              'lightTile',
              col * self.boardDimension,
              row * self.boardDimension,
            );
          } else {
            spriteImage.draw(ctx, 'darkTile', col * self.boardDimension, row * self.boardDimension);
          }
        }
      }
    }
    self.drawDefaultPieces(ctx);
  }
  drawDefaultPieces() {
    drawPawns(this.wPawnPos, this.bPawnPos, ctx, this.boardDimension);
  }
}

window.engine = Engine;
