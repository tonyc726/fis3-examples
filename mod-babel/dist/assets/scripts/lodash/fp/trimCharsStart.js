define('node_modules/lodash/fp/trimCharsStart', function(require, exports, module) {

  var convert = require('node_modules/lodash/fp/convert'),
      func = convert('trimCharsStart', require('node_modules/lodash/trimStart'));
  
  func.placeholder = require('node_modules/lodash/fp/placeholder');
  module.exports = func;
  

});
