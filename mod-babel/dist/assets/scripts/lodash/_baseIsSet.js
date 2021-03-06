define('node_modules/lodash/_baseIsSet', function(require, exports, module) {

  var getTag = require('node_modules/lodash/_getTag'),
      isObjectLike = require('node_modules/lodash/isObjectLike');
  
  /** `Object#toString` result references. */
  var setTag = '[object Set]';
  
  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }
  
  module.exports = baseIsSet;
  

});
