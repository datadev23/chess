/* global window,alert*/
/* eslint no-console:0 */
/* eslint no-alert: 0 */

/* An utility library for placing all the commonly used functions */
class Utils {
  static log(val) {
    console.log(val);
  }
  static warn(val) {
    console.warn(val);
  }
  static alert(val) {
    alert(val);
  }
}
window.utils = Utils;
