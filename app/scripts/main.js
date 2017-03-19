/* global window*/
const Engine = window.engine;

const test = () => {
  console.log(new Engine('Passed').check());
};

test();
