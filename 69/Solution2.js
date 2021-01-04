/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  /**
   * 二分查找模板2
   *  要注意,这里要选择右中点
   *  因此要用Math.ceil()
   *  如果选择左中点, 会出现死循环
   */
  if (x === 0) return 0;

  let left = 1,
    right = x;
  while (left < right) {
    let mid = Math.ceil(left + (right - left) / 2);
    if (mid ** 2 > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};
