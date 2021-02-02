/**
 * 优化
 * 使用空间换时间
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let board = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 初始化第一列为1 因为如果只有1列的化 不管有几行 到达终点的次数都是1
  for (let i = 0; i < m; i++) {
    board[i][0] = 1;
  }

  // 初始化第一行为1
  for (let i = 0; i < n; i++) {
    board[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      board[i][j] = board[i - 1][j] + board[i][j - 1];
    }
  }
  return board[m - 1][n - 1];
};

/**
 * 自己的解法
 * 深度优先搜索+记忆化
 * 这道题就像那道爬楼梯的题一样
 * 到达终点只有2个来源，
 * 一个是左边来的，也就是到达m,n-1
 * 另一个是上边来的，也就是m-1,n
 * 所以Count(m,n)= Count(m-1,n)+Count(m,n-1)
 * 效率较低
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let map = new Map();

  const dfs = (m, n) => {
    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;
    if (map.has(`${m}-${n}`)) {
      return map.get(`${m}-${n}`);
    }
    let res = dfs(m - 1, n) + dfs(m, n - 1);
    map.set(`${m}-${n}`, res);
    return res;
  };
  return dfs(m, n);
};
