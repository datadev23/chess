/* global window,document,alert,$*/

const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8];
let currentTile = {};
currentTile = { chess: 'val' };

class Engine {
  constructor(engineVal = 'test') {
    this.engine = engineVal;
  }
  load() {
    const doc = document;
    const win = window;
    const canvas = doc.createElement('canvas');
    if (!canvas) {
      Utils.alert('Canvas is not supported');
      return;
    }
    const ctx = canvas.getContext('2d');
    let lastTime;
    print(ctx, lastTime, win, columns, rows);
    canvas.width = 600;
    canvas.height = 606;
    doc.getElementById('chessBoard').appendChild(canvas);
    this.loaded = true;
    // createBoard();
    this.currentTile = currentTile;
    // ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
  }
  check() {
    return `${this.engine} works`;
  }
}

window.engine = Engine;
