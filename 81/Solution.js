/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  /**
   * 结合33题和154题,这道题就不难做了
   * 思路都是一样的
   */
  if (!nums) return false;

  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] === target) return true;
    if (nums[mid] < nums[right]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] > nums[right]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      right--;
    }
  }
  return nums[left] === target ? true : false;
};
