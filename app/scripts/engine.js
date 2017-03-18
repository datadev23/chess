// Event trigger handlers
(function Engine() {
  const engine = {};

  engine.test = function testAnon() {
    console.log('engine executed');
    return 'engine';
  };
  this.engine = engine;
}(this));
