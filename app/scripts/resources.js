// all resources for the application
/* global window,Image*/
// const loadResources = () => '0 resources';

const isReady = (me) => {
  let ready = true;
  Object.keys(me.resourceCache).forEach = (k) => {
    if ({}.prototype.hasOwnProperty.call(me.resourceCache, k) && !me.resourceCache[k]) {
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
    this.resourceCache = {};
    this.readyCallbacks = [];
  }
  load(url) {
    print('Enterd Resource loaders');
    const me = this;
    if (me.resourceCache[url]) {
      return me.resourceCache[url];
    }
    me.loaded = false;
    const img = new Image();

    img.onload = function Loading() {
      me.resourceCache[url] = img;
      me.loaded = true;
      print('Image loaded');
      if (isReady(me)) {
        me.readyCallbacks.forEach((val) => {
          val.func(val.self);
        });
      }
    };

    img.src = url;
    me.resourceCache[url] = false;
    return '';
  }

  get(url) {
    print(this.resourceCache[url]);
    return this.resourceCache[url];
  }

  onReady(func, self) {
    this.readyCallbacks.push({ func, self });
  }
}

window.resources = Resources;
