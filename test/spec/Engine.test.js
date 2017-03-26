/* global window,describe,it,expect*/
/* eslint no-unused-expressions: "warn"*/
(function TestSuite() {
  describe('Engine Test Module ', () => {
    const Engine = window.engine;
    describe('Engine Class', () => {
      it('should be truthy', () => {
        const engine = new Engine();
        expect(engine).not.toBeUndefined();
      });
    });
  });
}());
