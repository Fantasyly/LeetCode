/**
 * 时间复杂度:O(N)
 * 空间复杂度:O(N)
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let res = 0;
  // 将数组中的元素存入哈希表中
  let numsSet = new Set(nums);

  // 遍历哈希表中的每个元素
  for (const value of numsSet) {
    // 只有set中没有该元素的前一个时  才去计算
    // 因为这个数才是任何一段的开始
    if (!numsSet.has(value - 1)) {
      let count = 1;
      let currentValue = value;

      while (numsSet.has(currentValue + 1)) {
        count++;
        currentValue++;
      }
      res = Math.max(res, count);
    }
  }
  return res;
};
