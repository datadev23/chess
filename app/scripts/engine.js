//Event trigger handlers
(function(global){
  let engine = {};
  engine.test=function(){
    console.log('engine executed');
    return 'engine';
  };
  global.engine=engine;
})(window);
