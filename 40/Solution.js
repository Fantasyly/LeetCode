/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (!candidates.length) return [];

  candidates.sort((a, b) => a - b);
  let res = [];
  const dfs = (path, index, sum) => {
    if (sum === target) {
      res.push([...path]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i - 1] === candidates[i]) {
        continue;
      }
      sum += candidates[i];
      path.push(candidates[i]);

      dfs(path, i + 1, sum);
      sum -= candidates[i];
      path.pop();

      if (sum + candidates[i] >= target) {
        break;
      }
    }
  };
  dfs([], 0, 0);
  return res;
};
