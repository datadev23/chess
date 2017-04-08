// all resources for the application
/* global window,Image*/
// const loadResources = () => '0 resources';

const Utils = window.utils;
const print = (val) => {
  Utils.log(val);
};
const isReady = (me) => {
  let ready = true;
  Object.keys(me.resourceCache).forEach((k) => {
    if (!me.resourceCache[k]) {
      ready = false;
    }
  });
  return ready;
};

class Resources {
  constructor() {
    this.resourceCache = {};
    this.readyCallbacks = [];
  }
  loadAll(url) {
    if (url instanceof Array) {
      url.forEach(x => this.load(x));
    } else {
      this.load(url);
    }
  }
  load(url) {
    const me = this;
    if (me.resourceCache[url]) {
      return me.resourceCache[url];
    }
    me.loaded = false;
    const img = new Image();
    me.resourceCache[url] = false;
    img.onload = () => {
      me.resourceCache[url] = img;
      me.loaded = true;
      print(`${url} is loaded`);
      if (isReady(me)) {
        me.readyCallbacks.forEach((val) => {
          val.func(val.self);
        });
      }
    };

    img.src = url;
    return '';
  }

  get(url) {
    print(this.resourceCache[url]);
    return this.resourceCache[url];
  }

  onReady({ func, self }) {
    this.readyCallbacks.push({ func, self });
  }
}
/**
 * A Sprite class to load images from Sprite sheet and a draw function
 *
 */
class SpriteImage {
  /**
 *A General SpriteClass constructor
 * @param  {Image} img       [The Sprite Image]
 * @param  {Number} width     [ A default width of the Image in the Sprite sheet]
 * @param  {Number} height    [A default height of the Image in the Sprite sheet]
 * @param  {Array[]} positions [An array of positions onject with its keyNAme of Pixels for
 * all the images in the Sprite sheet]
 *
 */
  constructor(img, width, positions) {
    this.img = img;
    this.width = width;
    this.height = width;
    this.positions = positions;
  }
  draw(context, piece, x, y) {
    const pos = this.positions.find(obj => obj.name === piece).val;
    context.drawImage(
      this.img,
      pos[0],
      pos[1],
      this.width,
      this.height,
      x,
      y,
      this.width,
      this.height,
    );
  }
}
window.spriteImage = SpriteImage;
window.resources = Resources;
