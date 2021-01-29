/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  if (!S) return [""];
  if (S.length > 12) return [""];
  let res = [];
  // 通过正则去判断是不是一个字母
  let reg = /[a-z]/i;

  const dfs = (path, index) => {
    if (path.length === S.length) {
      res.push(path);
      return;
    }

    let cur = S[index];

    if (cur <= 9 && cur >= 0) {
      dfs(path + cur, index + 1);
    } else if (reg.test(cur)) {
      dfs(path + cur.toLowerCase(), index + 1);
      dfs(path + cur.toUpperCase(), index + 1);
    }
  };
  dfs([], 0);
  return res;
};
