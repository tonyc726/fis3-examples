define('node_modules/lodash/_setToString', function(require, exports, module) {

  var baseSetToString = require('node_modules/lodash/_baseSetToString'),
      shortOut = require('node_modules/lodash/_shortOut');
  
  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);
  
  module.exports = setToString;
  

});
