define('node_modules/lodash/fp/isNative', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('isNative', require('node_modules/lodash/isNative'), require('node_modules/lodash/fp/_falseOptions'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
