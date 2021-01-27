/**
 * 参看liweiwei大佬的解法
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  // 存储1-9的阶乘
  let factorials = new Array(10);
  factorials[0] = 1;

  // 计算阶乘
  for (let i = 1; i < 10; i++) {
    factorials[i] = factorials[i - 1] * i;
  }

  let res = "";
  let used = new Array(n + 1).fill(false);

  const dfs = path => {
    if (path.length === n) {
      res = path.join("");
      return;
    }

    /**
     * 计算还未确定的数字的全排列的个数，
     * 第一次进来，我们要选第一个元素，
     * count表示第一位确定的情况下，其余未确定数字的全排列的个数
     * 也就是(n - 1 - path.length)!
     * 接着进行循环
     */
    let count = factorials[n - path.length - 1];

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;

      if (count < k) {
        k -= count;
        continue;
      }
      path.push(i);
      used[i] = true;
      dfs(path);

      /**
       * 不需要重置状态了
       * 因为去dfs的时候
       * 直接就能找到最后满足要求的那个结果
       * 回来之后可以直接return
       */
      return;
    }
  };
  dfs([]);
  return res;
};

/**
 * 没有剪枝的解法
 * 把所有的全排列都求了出来
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = "";
  let count = 0;
  let used = new Array(n + 1).fill(false);

  const dfs = path => {
    if (path.length === n) {
      count++;
      if (count === k) {
        res = path.join("");
      }
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;
      path.push(i);
      used[i] = true;
      dfs(path);
      path.pop();
      used[i] = false;
    }
  };
  dfs([]);
  return res;
};
