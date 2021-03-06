define('node_modules/lodash/_arraySample', function(require, exports, module) {

  var baseRandom = require('node_modules/lodash/_baseRandom');
  
  /**
   * A specialized version of `_.sample` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @returns {*} Returns the random element.
   */
  function arraySample(array) {
    var length = array.length;
    return length ? array[baseRandom(0, length - 1)] : undefined;
  }
  
  module.exports = arraySample;
  

});
