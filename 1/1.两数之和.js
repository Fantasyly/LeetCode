/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length == 0) return nums;
  const map = new Map();
  const res = [];

  for (let i = 0; i < nums.length; i++ ){
    const val = target - nums[i];
    if (map.has(val)) {
      res.push(map.get(val), i);
      return res;
    }
    map.set(nums[i], i);
  };
  return res;
};
// @lc code=end
