/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n === 0 || k === 0 || n < k) return [];

  let res = [];
  const dfs = (path, index) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    // for (let i = index; i <= n; i++) {
    //   path.push(i);
    //   dfs(path, i + 1);
    //   path.pop();
    // }

    // 剪枝
    for (let i = index; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(path, i + 1);
      path.pop();
    }
  };
  dfs([], 1);
  return res;
};
