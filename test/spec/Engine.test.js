/* global window,describe,it,expect*/
/* eslint no-unused-expressions: "warn"*/
(function TestSuite() {
  describe('Engine Test Module ', () => {
    describe('Engine Class', () => {
      const Engine = window.engine;

      it('should be truthy', () => {
        const engine = new Engine();
        expect(engine).not.toBeUndefined();
      });
    });
  });
}());
