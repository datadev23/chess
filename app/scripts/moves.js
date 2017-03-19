// specific moves for all the items
/* global window*/
(function Moves() {
  const moves = {};
  moves.test = function testAnon() {
    console.log('moves executed');
    return 'moves';
  };
  window.moves = moves;
}());
