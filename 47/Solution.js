/**
 * 解法2
 * 时间复杂度: O(n*n!)
 * 空间复杂度: O(n*n!)
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
  const res = [];
  const used = new Array(nums.length);
  nums.sort((a, b) => a - b); // 递增排序 这样一样的数就会挨在一起

  const dfs = path => {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      /**
       * 在遍历这个数组的时候，
       * 如果前面的值是true，
       * 说明已经在上一次递归的时候选中了，
       * 如果前面的值是false，
       * 那就说明刚选完之后被释放了，
       * 如果此时相等的话，
       * 那么继续选择当前值肯定会产生重复
       */
      if (i > 0 && nums[i - 1] == nums[i] && !used[i - 1]) {
        // 如果当前的值和之前的那个值相等
        continue;
      }
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path);
      path.pop();
      used[i] = false;
    }
  };
  dfs([]);
  return res;
};
/**
 * 解法1
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!nums.length) return [];

  let res = [];
  let used = new Array(nums.length).fill(false);
  const dfs = path => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    // last记录当前位置用过的元素
    let last = new Map();
    for (let i = 0; i < nums.length; i++) {
      // 如果当前值已经被选中了，或者之前选过一次了 直接跳过
      if (used[i] || last.has(nums[i])) {
        continue;
      }
      used[i] = true;
      last.set(nums[i], i);
      path.push(nums[i]);
      dfs(path);

      path.pop();
      used[i] = false;
    }
  };
  dfs([]);
  return res;
};
