/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 0 || n === 1) return 1;

    let left = 1,
      right = n;
    while (left < right) {
      let mid = (left + right) >>> 1;

      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };
};
