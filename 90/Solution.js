/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (!nums.length) return [];

  nums.sort((a, b) => a - b);
  let res = [];
  const dfs = (path, begin) => {
    res.push([...path]);
    for (let i = begin; i < nums.length; i++) {
      if (i > begin && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      dfs(path, i + 1);
      path.pop();
    }
  };
  dfs([], 0);
  return res;
};
