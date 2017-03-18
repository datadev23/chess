// specific moves for all the items

(function Moves() {
  const moves = {};
  moves.test = function testAnon() {
    console.log('moves executed');
    return 'moves';
  };
  global.moves = moves;
}(this));
