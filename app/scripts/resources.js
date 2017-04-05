// all resources for the application
/* global window,Image*/
// const loadResources = () => '0 resources';
let resourceCache = {};
const readyCallbacks = [];
const isReady = () => {
  let ready = true;
  Object.keys(resourceCache).forEach = (k) => {
    if ({}.prototype.hasOwnProperty.call(resourceCache, k) && !resourceCache[k]) {
      ready = false;
    }
  };
  return ready;
};
const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};

class Resources {
  constructor() {
    resourceCache = {};
    this.resourceCache = {};
  }
  load(url) {
    print('Enterd Resource loaders');
    debugger;
    if (resourceCache[url]) {
      return resourceCache[url];
    }
    this.loaded = false;
    const img = new Image();
    img.onload = function Loading() {
      resourceCache[url] = img;
      this.loaded = true;
      if (isReady()) {
        readyCallbacks.forEach((func) => {
          func();
        });
      }
    };

    img.src = url;
    resourceCache[url] = img;
    return '';
  }

  get(url) {
    this.loaded = false;
    print('Enterd Resources get url');
    if (resourceCache[url]) return resourceCache[url];
    this.load(url);
    return resourceCache[url];
  }

  onReady(func) {
    this.readyCallbacks.push(func);
  }
}

window.resources = Resources;
