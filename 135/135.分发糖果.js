/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const len = ratings.length;
  if (len <= 1) return len;

  let candies = new Array(len).fill(1);

  //   左  当前  右

  //这里比较的是  当前值与左边的关系  当前值大于左边
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  //这里比较的是  当前值与右边的关系 当前值大于右边
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
    }
  }
  return candies.reduce((sum, value) => (sum += value), 0);
};
// @lc code=end
