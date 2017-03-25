/* global window*/
const test = () => 'Engine works';
const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
class Engine {
  constructor(engineVal = 'test') {
    this.engine = engineVal;
    this.test = test;
  }
  load() {
    const doc = global.document;
    const win = global.window;
    const canvas = doc.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let lastTime;
    print(ctx, lastTime, win);
    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);
    this.loaded = true;
    // ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
  }
  check() {
    return `${this.engine} works`;
  }
}

window.engine = Engine;
