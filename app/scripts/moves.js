//specific moves for all the items
(function(global){
  let moves = {};
  moves.test=function(){
    console.log('moves executed');
    return 'moves';
  };
  global.moves=moves;
})(window);
