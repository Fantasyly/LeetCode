/**
 * 动态规划
 * 时间复杂度:O(mn)
 * 空间复杂度:O(mn)
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  if (!A.length || !B.length) return 0;

  let m = A.length,
    n = B.length;
  let dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  let res = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      res = Math.max(dp[i][j], res);
    }
  }
  return res;
};
