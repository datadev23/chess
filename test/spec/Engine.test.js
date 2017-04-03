/* global window,describe,it,expect,spyOn*/
(function TestSuite() {
  describe('Engine variable defined', () => {
    const Engine = window.engine;

    it('is the object defined', () => {
      // console.log(Engine.check());
      const engine = new Engine();
      expect(engine).toBeDefined();
    });

    it('check method returns ', () => {
      const engine = new Engine();
      spyOn(engine, 'check');
      expect(engine.check).toHaveBeenCalled();
    });

    it('load method called ', () => {
      // expect(false).toBeDefined();
      const engine = new Engine();
      spyOn(engine, 'load');
      expect(engine.load).toHaveBeenCalled();
    });
  });
}());
