define('node_modules/lodash/_getMatchData', function(require, exports, module) {

  var isStrictComparable = require('node_modules/lodash/_isStrictComparable'),
      keys = require('node_modules/lodash/keys');
  
  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
        length = result.length;
  
    while (length--) {
      var key = result[length],
          value = object[key];
  
      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }
  
  module.exports = getMatchData;
  

});
