/**
 * 采用滚动数组优化时间复杂度
 * 时间复杂度:O(N)
 * 空间复杂度:O(1）
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n;
  /**
   * 初始化p表示到第一级台阶的个数
   * q表示到第二级台阶的个数
   */
  let p = 1,
    q = 2,
    res = 0;
  for (let i = 3; i <= n; i++) {
    res = p + q;
    p = q;
    q = res;
  }
  return res;
};

/**
 * 时间复杂度:O(N)
 * 空间复杂度:O(N）
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
/**
 * 会超时
 * 因为会涉及到很多的重复计算
 * 可以用哈希表来进行记忆话
 * 用哈希表存储到达每个台阶的方法数
 * 计算之前先看看是否计算过 如果计算过的话直接从哈希表中取值
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
