/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
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
