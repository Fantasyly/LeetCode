/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  if (nums.length <= 1) return true;
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    }

    count++;
    if (count === 2) return false;
    if (i - 1 >= 0 && nums[i - 1] > nums[i + 1]) {
      nums[i + 1] = nums[i];
    } else {
      nums[i] = nums[i + 1];
    }
  }
  return true;
};
