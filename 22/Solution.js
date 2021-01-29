/**
 * 深度优先搜索
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return [];
  let res = [];

  dfs("", n, n);
  return res;

  function dfs(path, left, right) {
    // 如果括号没剩下的了 那就添加结果
    if (left === 0 && right === 0) {
      res.push(path);
      return;
    }

    // 剪枝 剩余左括号的个数大于剩余右括号的个数，
    // 肯定是不符合要求的 此时直接return
    if (left > right) {
      return;
    }

    if (left > 0) {
      dfs(path + "(", left - 1, right);
    }

    if (right > 0) {
      dfs(path + ")", left, right - 1);
    }
  }
};
