/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  /**
   * 思路:
   * 首先排除特殊情况,
   * 如果第一个数小于最后一个数,
   * 说明数组没有发生旋转
   *
   * 使用二分查找去找最小值
   * 定义target为nums[0]
   *  如果遇到nums[mid] > nums[mid + 1]的情况,
   *   说明找到了最小值 就是nums[mid + 1]
   *  当nums[mid] > target时, 说明还处于前半段的升序中,
   *  left = mid + 1 收缩区间
   *  当nums[mid] <= target时,
   *    能走到这,说明不是最小值,收缩右边界
   *    right = midl
   */
  let len = nums.length;
  if (len === 1) return nums[0];
  let left = 0,
    right = len - 1;
  let target = nums[0];

  //   数组没有旋转
  if (nums[0] < nums[len - 1]) {
    return nums[0];
  }
  while (left < right) {
    let mid = (left + right) >>> 1;

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid] > target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
