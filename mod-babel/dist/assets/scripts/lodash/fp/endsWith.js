define('node_modules/lodash/fp/endsWith', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('endsWith', require('node_modules/lodash/endsWith'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
