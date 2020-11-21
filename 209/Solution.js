/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (!nums || s < 0) return 0;

  let left = 0,
    right = 0,
    minLen = Infinity,
    sum = 0;
  while (right < nums.length) {
    sum += nums[right];

    while (sum >= s) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }

    right++;
  }

  return minLen === Infinity ? 0 : minLen;
};
