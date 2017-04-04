// all resources for the application
/* global window,Image*/
// const loadResources = () => '0 resources';
class Resources {
  cosntructor() {
    this.init();
  }
  init() {
    this.resourceCache = {};
    this.loading = [];
    this.readyCallbacks = [];
  }
  load(url) {
    if (this.resourceCache && {}.prototype.hasOwnProperty.call(this.resourceCache, url)) {
      return this.resourceCache[url];
    }
    const img = new Image();
    img.onload = function imageLoader() {
      this.resourceCache[url] = img;

      if (this.isReady()) {
        this.readyCallbacks.forEach((func) => {
          func();
        });
      }
    };

    // this.resourceCache[url] = false;
    img.src = url;
    return '';
  }

  get(url) {
    return this.resourceCache[url];
  }

  isReady() {
    let ready = true;
    Object.keys(this.resourceCache).forEach = (k) => {
      if ({}.prototype.hasOwnProperty.call(this.resourceCache, k) && !this.resourceCache[k]) {
        ready = false;
      }
    };
    return ready;
  }

  onReady(func) {
    this.readyCallbacks.push(func);
  }
}

window.resources = Resources;
