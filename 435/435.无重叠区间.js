/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length <= 1) return 0;
  intervals.sort((a, b) => {
    return a[1] - b[1];
  });

  let res = 0;
  let lastEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const curStart = intervals[i][0],
      curEnd = intervals[i][1];

    if (curStart < lastEnd) {
      res++;
    } else {
      lastEnd = curEnd;
    }
  }
  return res;
};
// @lc code=end
