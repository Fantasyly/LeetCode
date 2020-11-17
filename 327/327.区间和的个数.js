/*
 * @lc app=leetcode.cn id=327 lang=javascript
 *
 * [327] 区间和的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  if (nums.length === 0) return 0;
  let s = 0,
    sum = [0];

  nums.forEach(item => {
    s += item;
    sum.push(s);
  });

  const countRangeSumRecursive = (sum, left, right, lower, upper) => {
    if (left === right) {
      return 0;
    } else {
      const mid = Math.floor((left + right) / 2);
      // 获取左边的结果值
      const res1 = countRangeSumRecursive(sum, left, mid, lower, upper);
      // 获取右边的结果值
      const res2 = countRangeSumRecursive(sum, mid + 1, right, lower, upper);

      let ans = res1 + res2;

      // 获取两个有序数组的满足要求的个数
      let i = left;
      let jlow = mid + 1;
      let jup = mid + 1;

      while (i <= mid) {
        while (jlow <= right && sum[jlow] - sum[i] < lower) jlow++;
        while (jup <= right && sum[jup] - sum[i] <= upper) jup++;
        ans += jup - jlow;
        i++;
      }

      //   归并已经知道结果的2个数组
      const sorted = new Array(right - left + 1);
      let p1 = left,
        p2 = mid + 1,
        p = 0;

      while (p1 <= mid || p2 <= right) {
        //   前面if和else if用来处理两个数组长度不同的情况
        if (p1 > mid) {
          sorted[p++] = sum[p2++];
        } else if (p2 > right) {
          sorted[p++] = sum[p1++];
        } else {
          if (sum[p1] >= sum[p2]) {
            sorted[p++] = sum[p2++];
          } else {
            sorted[p++] = sum[p1++];
          }
        }
      }

      //   更新原sum数组
      for (let i = 0; i < sorted.length; i++) {
        sum[left + i] = sorted[i];
      }

      return ans;
    }
  };
  return countRangeSumRecursive(sum, 0, sum.length - 1, lower, upper);
};
// @lc code=end
