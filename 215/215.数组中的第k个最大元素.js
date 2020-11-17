/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (nums.length === 0) return Infinity;

  const quickSelect = (arr, k) => {
    if (arr.length === 1) return arr;
    const pivot = arr[0],
      left = [],
      right = [];

    for (let i = 1; i < arr.length; i++) {
      arr[i] <= pivot && left.push(arr[i]);
      arr[i] > pivot && right.push(arr[i]);
    }
    if (right.length === k - 1) {
      return [...left, pivot, ...right];
    } else if (right.length < k - 1) {
      return [...quickSelect(left, k - right.length - 1), pivot, ...right];
    } else {
      return [...left, pivot, ...quickSelect(right, k)];
    }
  };

  return quickSelect(nums, k).slice(k, 0);
};
// @lc code=end
