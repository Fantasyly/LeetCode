/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  /**
   * 思路:
   *  优化的地方在于我们很容易想到对于一个数来说
   *  其平方根会小于其值的一半
   * 但并不是所有的数都如此
   * 因此 求 (a / 2) ^ 2 >= a 解得a >= 4
   *  因此 当a大于等于4时, 其一半的平方就会大于a,也就不需要考虑一半及以后的数了
   * 因此, 对0 1 2 3进行特殊处理  其结果为0 1 1 1
   *
   * 时间复杂度: O(logx)
   * 空间复杂度: O(1)
   */
  if (x === 0) return x;
  if (x < 4) return 1;

  let left = 1,
    right = Math.floor(x / 2);
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
