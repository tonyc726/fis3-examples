define('node_modules/lodash/intersectionBy', function(require, exports, module) {

  var arrayMap = require('node_modules/lodash/_arrayMap'),
      baseIntersection = require('node_modules/lodash/_baseIntersection'),
      baseIteratee = require('node_modules/lodash/_baseIteratee'),
      baseRest = require('node_modules/lodash/_baseRest'),
      castArrayLikeObject = require('node_modules/lodash/_castArrayLikeObject'),
      last = require('node_modules/lodash/last');
  
  /**
   * This method is like `_.intersection` except that it accepts `iteratee`
   * which is invoked for each element of each `arrays` to generate the criterion
   * by which they're compared. The order and references of result values are
   * determined by the first array. The iteratee is invoked with one argument:
   * (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
   * // => [2.1]
   *
   * // The `_.property` iteratee shorthand.
   * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }]
   */
  var intersectionBy = baseRest(function(arrays) {
    var iteratee = last(arrays),
        mapped = arrayMap(arrays, castArrayLikeObject);
  
    if (iteratee === last(mapped)) {
      iteratee = undefined;
    } else {
      mapped.pop();
    }
    return (mapped.length && mapped[0] === arrays[0])
      ? baseIntersection(mapped, baseIteratee(iteratee, 2))
      : [];
  });
  
  module.exports = intersectionBy;
  

});
