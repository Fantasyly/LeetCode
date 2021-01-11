/**
 * 这个代码是根据模板写的
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1;

  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;
    // left - mid这段是有序的
    if (nums[mid] >= nums[left]) {
      // 如果target出现在这一段里 收缩right
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid;
      } else {
        // 否则left扩张
        left = mid + 1;
      }
    } else if (nums[mid] <= nums[right]) {
      // mid - right 这段是有序的
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left] === target ? left : -1;
};
/**
 * 这个代码是根据官方题解写的
 * 但是这个代码和我的模板不同
 * 为了模板的大一统
 * 还是看上面的代码
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
