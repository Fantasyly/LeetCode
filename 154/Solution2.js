/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  /**
   * 时间复杂度：平均时间复杂度为 O(logn)，
   * 其中 n 是数组 nums 的长度。
   * 如果数组是随机生成的，那么数组中包含相同元素的概率很低，
   * 在二分查找的过程中，大部分情况都会忽略一半的区间。
   * 而在最坏情况下，如果数组中的元素完全相同，那么 while 循环就需要执行 n 次，
   * 每次忽略区间的右端点，时间复杂度为 O(n)O(n)。
   * 空间复杂度：O(1)。
   */
  let len = nums.length;
  if (len === 1) return nums[0];

  // 数组没有旋转
  if (nums[0] < nums[len - 1]) {
    return nums[0];
  }

  let left = 0,
    right = len - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      // 小于的时候可能是最小值 因此不能设为right = mid - 1;
      right = mid;
    } else {
      right--;
    }
  }
  return nums[left];
};
