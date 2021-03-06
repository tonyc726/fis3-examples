define('node_modules/lodash/startsWith', function(require, exports, module) {

  var baseClamp = require('node_modules/lodash/_baseClamp'),
      baseToString = require('node_modules/lodash/_baseToString'),
      toInteger = require('node_modules/lodash/toInteger'),
      toString = require('node_modules/lodash/toString');
  
  /**
   * Checks if `string` starts with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {string} [target] The string to search for.
   * @param {number} [position=0] The position to search from.
   * @returns {boolean} Returns `true` if `string` starts with `target`,
   *  else `false`.
   * @example
   *
   * _.startsWith('abc', 'a');
   * // => true
   *
   * _.startsWith('abc', 'b');
   * // => false
   *
   * _.startsWith('abc', 'b', 1);
   * // => true
   */
  function startsWith(string, target, position) {
    string = toString(string);
    position = position == null
      ? 0
      : baseClamp(toInteger(position), 0, string.length);
  
    target = baseToString(target);
    return string.slice(position, position + target.length) == target;
  }
  
  module.exports = startsWith;
  

});
