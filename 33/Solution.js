/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * 时间复杂度: O(logn)
   * 空间复杂度: O(1)
   */
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      // 说明0-mid这段数组是有序的
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 说明右半段是有序的
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left] === target ? left : -1;
};
