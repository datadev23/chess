/* global window*/
const test = () => 'Engine works';

class Engine {
  constructor(engineVal = 'test') {
    this.engine = engineVal;
    this.test = test;
  }

  check() {
    return `${this.engine} works`;
  }
}

window.engine = Engine;
