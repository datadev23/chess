/* global window,document,alert,$*/

const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
const Resources = window.Resources;
const resources = new Resources();
// const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numCols = 8;
const numRows = 8;
// const rows = [1, 2, 3, 4, 5, 6, 7, 8];

// let currentTile = {};
// currentTile = { chess: 'val' };
const renderBoard = (ctx, blackTile, whiteTile) => {
  let row;
  let col;

  // ctx.drawImage(resources.get(blackTile), 0 * 60, 0 * 60);
  // ctx.drawImage(resources.get(whiteTile), 1 * 60, 1 * 60);

  for (row = 0; row < numRows; row = +1) {
    for (col = 0; col < numCols; col = +1) {
      // if (row % 2 === 0) {
      //   if (col % 2 === 0) {
      //     ctx.drawImage(resources.get(blackTile), col * 60, row * 60);
      //   } else {
      //     ctx.drawImage(resources.get(whiteTile), col * 60, row * 60);
      //   }
      // } else {
      //   if (col % 2 === 0) {
      //     ctx.drawImage(resources.get(whiteTile), col * 60, row * 60);
      //   } else {
      //     ctx.drawImage(resources.get(blackTile), col * 60, row * 60);
      //   }
      // }
      print(`Column No is ${col} and Row is ${row}`);
    }
  }
};
class Engine {
  constructor(engineVal = 'test') {
    this.engine = engineVal;
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
    const blackTile = 'images/blackTile.jpg';
    const whiteTile = 'images/whiteTile.png';
    const ctx = canvas.getContext('2d');
    // resources.load(blackTile);
    // resources.load(whiteTile);
    canvas.width = 1000;
    canvas.height = 600;
    doc.getElementById('chessBoard').appendChild(canvas);

    this.loaded = true;
    renderBoard(ctx, blackTile, whiteTile);
  }
  check() {
    return `${this.engine} works`;
  }
}

window.engine = Engine;
