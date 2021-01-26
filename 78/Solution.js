/**
 * 回溯解决
 * 时间复杂度: O(n*2^n)
 * 空间复杂度: O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums.length) return [];
  let res = [];
  const dfs = (path, begin) => {
    res.push([...path]);
    for (let i = begin; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(path, i + 1);
      path.pop();
    }
  };
  dfs([], 0);
  return res;
};
