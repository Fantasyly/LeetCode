/**
 * 回溯解决
 * 时间复杂度： O(n*n!)
 * 空间复杂度: O(n*n!)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums.length) return [];

  // 记录当前位置的值是否被用过了
  let used = new Array(nums.length).fill(false);
  let res = [];

  const dfs = path => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path);
      path.pop(nums[i]);
      used[i] = false;
    }
  };
  dfs([]);
  return res;
};
