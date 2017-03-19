/* global window*/
const Engine = window.engine;
const Resources = window.resources;
const Moves = window.moves;
const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
const init = () => {
  const engine = new Engine('Main Engine');
  const moves = new Moves('pawn');
  const resources = new Resources();

  print(engine.check());
  print(moves.currentMove);
  print(resources.load());
};

class Main {
  constructor() {
    this.init = init();
  }
  static init() {
    init();
  }
}

Main.init();
