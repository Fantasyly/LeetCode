/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  if (n === 0) return [];
  const res = [];

  for (let i = 0; i < n; i++) {
    while (nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (i !== nums[i] - 1) {
      res.push(i + 1);
    }
  }
  return res;
};
