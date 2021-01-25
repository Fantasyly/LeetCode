/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (!candidates.length) return [];
  candidates.sort((a, b) => a - b);

  let res = [];
  /**
   *
   * @param {Array} path 存储当前选中的数
   * @param {Number} sum 和
   * @param {Number} index 下一次遍历开始时的索引
   */
  const dfs = (path, sum, index) => {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    if (sum > target) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);

      dfs(path, sum, i);

      sum -= candidates[i];
      path.pop();

      // 剪枝 如果已经大于等于target了 那就不再需要往后选择了
      // 因为后面的只会越来越大
      if (sum + candidates[i] >= target) {
        break;
      }
    }
  };
  dfs([], 0, 0);
  return res;
};
