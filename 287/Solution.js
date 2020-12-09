/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const len = nums.length;
  if (len <= 0) return 0;

  let freqs = new Array(len).fill(0);

  return nums.find(n => ++freqs[n] === 2);
};
