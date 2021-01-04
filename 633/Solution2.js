/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  /**
   * 这个思路就是用内置的sqrt方法替代去二分查找寻找b的过程
   */
  if (c < 0) return false;

  for (let a = 0; a ** 2 <= c; a++) {
    let b = c - a ** 2;
    if (Math.sqrt(b) === Math.floor(Math.sqrt(b))) {
      return true;
    }
  }

  return false;
};
