//all resources for the application
(function(global){
  let resources = {};
  resources.test=function(){
    console.log('resources executed');
    return 'resources';
  };
  const arr = ['test','test'];
  arr.forEach((x)=>console.log(x));
  global.resources=resources;
})(window);
