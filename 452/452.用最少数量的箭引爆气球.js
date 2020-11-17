/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length <= 1) return points.length;
  points.sort((a, b) => a[1] - b[1]);
  let res = 1;
  let lastEnd = points[0][1];

  points.forEach(([curStart, curEnd]) => {
    if (curStart > lastEnd) {
      lastEnd = curEnd;
      res++;
    }
  });
  return res;
};
// @lc code=end
