/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  /**
   * 首先说思路
   *  从0开始遍历, 固定a, 然后使用二分查找去找b
   *  使得a^2 + b^2 = c
   */
  if (c < 0) return false;

  // 循环中止条件确保b2大于0
  for (let a = 0; a ** 2 <= c; a++) {
    // 新找到b的平方
    let b2 = c - a ** 2;
    // 使用二分查找去找b 找到就返回true
    if (binarySearch(0, b2, b2)) {
      return true;
    }
  }

  return false;
};

// a^2 + b^2 = c
// 确认有没有这样的b
function binarySearch(left, right, target) {
  if (target < left || target > right) {
    return false;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cur = mid ** 2;
    if (cur == target) {
      return true;
    } else if (cur < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
