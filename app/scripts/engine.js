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
const doc = document;
// const win = window;
const canvas = doc.createElement('canvas');
const blackTile = 'images/blackSquare.png';
const whiteTile = 'images/whiteSquare.png';
resources.load(blackTile);
resources.load(whiteTile);
const ctx = canvas.getContext('2d');
// let currentTile = {};
// currentTile = { chess: 'val' };
const renderBoard = () => {
  let row;
  let col;

  for (row = 1; row <= numRows; row = +1) {
    for (col = 1; col <= numCols; col = +1) {
      if (row % 2 === 0) {
        if (col % 2 === 0) {
          ctx.drawImage(resources.get(blackTile), col * 101, row * 83);
        } else {
          ctx.drawImage(resources.get(whiteTile), col * 101, row * 83);
        }
      } else if (col % 2 === 0) {
        ctx.drawImage(resources.get(whiteTile), col * 101, row * 83);
      } else {
        ctx.drawImage(resources.get(blackTile), col * 101, row * 83);
      }
    }
  }
};
class Engine {
  constructor(engineVal = 'test') {
    this.engine = engineVal;
  }
  load() {
    print('Engine load function called');
    if (!canvas) {
      Utils.alert('Canvas is not supported');
      return;
    }

    canvas.width = 600;
    canvas.height = 606;
    doc.getElementById('chessBoard').appendChild(canvas);
    renderBoard();
    this.loaded = true;
  }
  check() {
    return `${this.engine} works`;
  }
}

window.engine = Engine;
