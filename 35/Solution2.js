/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  /**
   * 首先，插入位置有可能在数组的末尾（题目中的示例 3），
   * 需要单独判断。如果在数组的末尾，插入位置的下标就是数组的长度；
   * 否则，根据示例和暴力解法的分析，
   * 插入位置的下标是 大于等于 target 的第 11 个元素的位置。
   * 因此，严格小于 target 的元素一定不是解，在
   * 循环体中将左右边界 left 和 right 逐渐向中间靠拢，
   * 最后 left 和 right 相遇，则找到了插入元素的位置。根据这个思路，可以写出如下代码。
   *
   * 时间复杂度：O(logN)，
   * 这里 N 是数组的长度，
   * 每一次都将问题的规模缩减为原来的一半，因此时间复杂度是对数级别的；
   * 空间复杂度：O(1)，使用到常数个临时变量。
   */
  if (!nums) return 0;

  let left = 0,
    right = nums.length - 1;

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
