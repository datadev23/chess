// all resources for the application
/* global window,Image*/
// const loadResources = () => '0 resources';
const resourceCache = {};
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
class Resources {
  load(url) {
    this.loaded = false;
    const img = new Image();
    img.onload = () => {
      resourceCache[url] = img;
      if (isReady()) {
        readyCallbacks.forEach((func) => {
          func();
        });
      }
    };

    img.src = url;
    // resourceCache[url] = img;
    return '';
  }

  get(url) {
    this.loaded = false;
    return resourceCache[url];
  }

  onReady(func) {
    this.readyCallbacks.push(func);
  }
}

window.resources = Resources;
