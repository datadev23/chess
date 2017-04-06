/* global window,document,alert,$*/
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderBoard"] }] */

const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
const Resources = window.Resources;
const resources = new Resources();
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numCols = 8;
const numRows = 8;
const rows = [1, 2, 3, 4, 5, 6, 7, 8];

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
    this.blackTile = 'images/blackTile.jpg';
    this.whiteTile = 'images/whiteTile.png';
    this.pawnImageB = {
      src: 'images/pieces.png',
      width: '31',
      height: '66',
      x: '-31',
      y: '-19',
    };
    this.pawnImageW = {
      src: 'images/pieces.png',
      width: '',
      height: '',
      x: '-30',
      y: '-120',
    };
    ctx = canvas.getContext('2d');
    resources.load(this.blackTile);
    resources.load(this.whiteTile);
    // resources.loadPieces([this.pawnImageB, this.pawnImageW]);
    resources.onReady(this.renderBoard, this);
    canvas.width = 600;
    canvas.height = 600;
    doc.getElementById('chessBoard').appendChild(canvas);

    this.loaded = true;
  }
  renderBoard(self) {
    let row;
    let col;
    // ctx.drawImage(resources.get(blackTile), 0 * 60, 0 * 60);
    // ctx.drawImage(resources.get(whiteTile), 1 * 60, 1 * 60);
    for (row = 0; row < numRows; row += 1) {
      for (col = 0; col < numCols; col += 1) {
        if (row % 2 === 0) {
          if (col % 2 === 0) {
            ctx.drawImage(
              resources.get(self.blackTile, rows[row], columns[col]),
              col * 60,
              row * 60,
            );
          } else {
            ctx.drawImage(
              resources.get(self.whiteTile, rows[row], columns[col]),
              col * 60,
              row * 60,
            );
          }
        } else if (row % 2 !== 0) {
          if (col % 2 === 0) {
            ctx.drawImage(
              resources.get(self.whiteTile, rows[row], columns[col]),
              col * 60,
              row * 60,
            );
          } else {
            ctx.drawImage(
              resources.get(self.blackTile, rows[row], columns[col]),
              col * 60,
              row * 60,
            );
          }
        }
      }
    }
  }
  // generateItems() {
  //   const self = this;
  //   self.pawnImage;
  // }
}

window.engine = Engine;
