/**
 * 动态规划解法
 * dp[i]表示以nums[i]为末尾的递增子序列的长度
 * 时间复杂度： O(n2)
 * 空间复杂度： O(n)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length;
  if (len < 2) return nums.length;

  let dp = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    //  去前面的dp数组中 寻找小于当前nums[i] 且dp值最大的
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  // 在dp数组中找到最大的
  return dp.reduce((max, value) => Math.max(max, value));
};

/**
 * 动态规划的优化解法
 * 题解看liweiwei的那篇题解
 * 时间复杂度： O(nlogn) 外层循环的时间复杂度是O(n),二分查找的时间复杂度是O(logn)
 * 空间复杂度：O(n)
 */
var lengthOfLIS = function (nums) {
  let len = nums.length;
  if (len < 2) return len;

  // dp[i]存储的是长度为i + 1的子序列的末尾元素
  let dp = new Array(len);

  // 第一个值初始情况下就是长度为1的子序列的末尾
  dp[0] = nums[0];

  // end表示目前最长的序列的索引
  let end = 0;

  for (let i = 1; i < len; i++) {
    if (nums[i] > dp[end]) {
      /**
       * 如果当前值大于最长子序列的末尾值
       * 则end后移一位
       * 并填充当前值作为新的子序列的末尾值
       */
      end++;
      dp[end] = nums[i];
    } else {
      /**
       * 如果当前值小于等于的话
       * 那就通过二分查找去0-end这一段上
       * 寻找第一个大于等于nums[i]的数
       * 并替换掉它
       */
      let left = 0,
        right = end;
      while (left < right) {
        let mid = (left + right) >>> 1;

        if (dp[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      dp[left] = nums[i];
    }
  }
  return end + 1;
};
