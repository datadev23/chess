/* global window*/
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */

/* An utility library for placing all the commonly used functions */
class Utils {
  static log(val) {
    console.log(val);
  }
  static warn(val) {
    console.warn(val);
  }
}
window.utils = Utils;
