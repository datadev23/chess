/* global window*/
const Engine = window.engine;
// const Moves = window.moves;
const Utils = window.utils;
// Need to have an extensive list of every item on the board. CAn be a static list from another file
const itemModel = {
  row: '7',
  column: 'B',
  side: 'white',
  status: 'active',
  name: 'pawn',
};
let currentlySelected = {};

const print = (val) => {
  Utils.log(val);
};
const init = () => {
  const engine = new Engine('Main Engine');
  // const moves = new Moves('pawn');

  engine.load();
  print(engine.check());
  // print(moves.currentMove);
};

class Main {
  constructor() {
    this.init = init();
  }
  start(item = 'NA') {
    this.selectedSide = 'white';
    this.item = item;
  }
  select(...args) {
    currentlySelected = args[0];
    this.selectedSide = args[1];
    this.item = args[2];
    global.currentlySelected = currentlySelected;
    itemModel.status = 'inactive';
  }
  static init() {
    init();
  }
}

Main.init();
