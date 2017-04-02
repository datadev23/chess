/* global window,describe,it,expect*/
/* eslint no-unused-expressions: "warn"*/
(function TestSuite() {
	 

describe('Engine variable defined', function() {

	it('is the object defined', function() {
		 const Engine = window.engine;
		 //console.log(Engine.check());
		 expect(false).toBeDefined();

	});

	it('check method returns ', function() {

		spyOn(engine, 'check');
		expect(engine.check).toHaveBeenCalled();


		});

		it('load method called ', function() {

		//expect(false).toBeDefined();

        spyOn(engine, 'load');
		expect(engine.load).toHaveBeenCalled();

		});






});

}());
