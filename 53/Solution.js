/**
 * 这一个是官方题解的思路
 * 看了题解才知道原来是动态规划的思想
 *
 * sum: 前一段的和
 * maxSum: 最大和
 *
 * 如果sum+value > sum, sum = sum + value那么当前值就相当于加入前一段
 * 否则  sum自立门户, sum = value;
 * 然后取maxSum和sum的最大值
 *
 *
 * 尽管和我下面的思路略有不同  但是代码写出来是一模一样的
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return -Infinity;

  let sum = 0,
    maxSum = 0;
  nums.forEach(value => {
    // if (sum + value > sum) {
    //     sum += value
    // } else {
    //     sum = value;
    // }
    // 上面的代码就等价于
    sum = Math.max(sum + value, value);

    maxSum = Math.max(sum, maxSum);
  });
  return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
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
