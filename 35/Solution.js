/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums) return 0;

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.ceil(left + (right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  if (nusm[left] === target) {
    return left;
  } else if (nums[left] < target) {
    return left + 1;
  } else {
    return left - 1 >= 0 ? left - 1 : 0;
  }
};
