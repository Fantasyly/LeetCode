/**
 * 思路可以看官方题解
 * dp解法:
 * 题目要求输出数组中某个区间内数字之和最大的那个值。
 * dp[i] 表示 [0,i] 区间内各个子区间和的最大值，
 * 状态转移方程是 dp[i] = nums[i] + dp[i-1] (dp[i-1] > 0)，
 *             dp[i] = nums[i] (dp[i-1] ≤ 0)。
 */
var maxSubArray = function (nums) {
  if (!nums.length) return -Infinity;
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function (nums) {
  /**
   * 首先说一下我的思路,
   * 对于当前位置来说, 都要考虑一个问题
   * 即 是该加入前面那段, 还是自己成为老大然后往后计算
   * 我想的方法是,
   * 首先判断前一段的sum, 如果和大于0, 那么当前值就加入前一段, sum += value
   * 如果前一段和小于等于0且当前值还比其大,那么自己自立门户成为老大, sum = value
   * 然后判断sum和maxSum的值, 取最大值
   *
   * 时间复杂度: O(n)
   * 空间复杂度: O(1)
   */
  if (!nums.length) return 0;

  let maxSum = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];
    if (sum > 0) {
      sum += value;
    } else if (value > sum) {
      sum = value;
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return Math.max(sum, maxSum);
};
