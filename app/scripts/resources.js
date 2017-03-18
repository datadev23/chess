// all resources for the application
(function Resources() {
  const resources = {};
  resources.test = function testAnon() {
    console.log('resources executed');
    return 'resources';
  };
  const arr = ['test', 'test'];
  arr.forEach(x => console.log(x));
  global.resources = resources;
}(this));
