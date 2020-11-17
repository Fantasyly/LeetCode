/*
 * @lc app=leetcode.cn id=31 lang=iavascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) return;
  let flag = false;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      /*
       * 找到第一个小数 nums[i]
       * 从i +  1到数组结束都是一个递减序列
       * 在递减序列中, 逆序遍历, 寻找到第一个大于nums[i]的, 这个值就是该序列中
       * 大于nums[i]的最小值
       */
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          [nums[j], nums[i]] = [nums[i], nums[j]];
          flag = true;
          break;
        }
      }
      //   对数组后面的进行排序  后面的顺序就是降序的 使其改为升序 直接逆置就可以
      let left = i + 1,
        right = nums.length - 1;
      while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
      break;
    }
  }
  if (!flag) {
    nums.sort((a, b) => a - b);
  }
};
// @lc code=end
