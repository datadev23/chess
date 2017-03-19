// all resources for the application
/* global window*/
(function Resources() {
  const resources = {};
  resources.test = function testAnon() {
    console.log('resources executed');
    return 'resources';
  };
  const arr = ['test', 'test'];
  arr.forEach(x => console.log(x));
  window.resources = resources;
}(this));
