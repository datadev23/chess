/* global window*/
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */
class Utils {
  static log(val) {
    console.log(val);
  }
  static warn(val) {
    console.warn(val);
  }
}
window.utils = Utils;
