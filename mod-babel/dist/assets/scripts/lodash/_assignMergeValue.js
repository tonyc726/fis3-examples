define('node_modules/lodash/_assignMergeValue', function(require, exports, module) {

  var baseAssignValue = require('node_modules/lodash/_baseAssignValue'),
      eq = require('node_modules/lodash/eq');
  
  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }
  
  module.exports = assignMergeValue;
  

});
