define('node_modules/lodash/concat', function(require, exports, module) {

  var arrayPush = require('node_modules/lodash/_arrayPush'),
      baseFlatten = require('node_modules/lodash/_baseFlatten'),
      copyArray = require('node_modules/lodash/_copyArray'),
      isArray = require('node_modules/lodash/isArray');
  
  /**
   * Creates a new array concatenating `array` with any additional arrays
   * and/or values.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to concatenate.
   * @param {...*} [values] The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   * @example
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   */
  function concat() {
    var length = arguments.length;
    if (!length) {
      return [];
    }
    var args = Array(length - 1),
        array = arguments[0],
        index = length;
  
    while (index--) {
      args[index - 1] = arguments[index];
    }
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
  }
  
  module.exports = concat;
  

});
