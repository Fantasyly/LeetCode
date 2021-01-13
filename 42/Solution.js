/**
 * 暴力解法： 逐行求
 * 首先求出最高的高度
 * 然后逐行求能接的雨水的数量
 * 具体细节见题解
 * 时间复杂度：如果最大的数是 m，个数是 n，那么就是O(m∗n)
 * 空间复杂度：O(1)
 *
 * 该方法会超过时间限制
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;

  let maxHeight = height.reduce((max, item) => {
    if (item > max) {
      return item;
    }
    return max;
  }, 0);

  let ans = 0;
  for (let i = 1; i <= maxHeight; i++) {
    let rowSum = 0;
    let flag = false;
    for (let j = 0; j < height.length; j++) {
      if (flag && height[j] < i) {
        // 如果当前值小于i 雨水数量+1
        rowSum++;
      }

      // 当当前高度大于等于i的时候 flag改为true 并把rowSum加到ans中
      if (height[j] >= i) {
        flag = true;
        ans += rowSum;
        rowSum = 0;
      }
    }
  }
  return ans;
};

/**
 * 暴力解法 逐列求
 * 思路： 对于每一个元素
 * 往左找到最大的墙的高度
 * 往右找到最大的墙的高度
 * 左边最大和右边最大 取最小值，也就是短板墙的高度
 * 如果短板墙比自己的高度大的话  那么就减去当前的值 就能得到当前处能接的雨水的数量
 *
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(1)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;
  let ans = 0;

  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0,
      rightMax = 0;
    for (let j = i - 1; j >= 0; j--) {
      leftMax = Math.max(height[j], leftMax);
    }
    for (let j = i + 1; j < height.length; j++) {
      rightMax = Math.max(height[j], rightMax);
    }
    let minWall = Math.min(leftMax, rightMax);
    if (minWall > height[i]) {
      ans += minWall - height[i];
    }
  }
  return ans;
};

/**
 * 逐列求法的改进 动态规划
 * 用两个数组leftMax和rightMax来记录左边和右边最高的墙的高度
 * leftMax[i]表示第i列左边最高的墙的高度（不包括i这一列本身）
 * 求法：leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
 * 对于每一列，其左边最高墙的高度都是 【前面那一列左边最高的高度】与【左边那一列的高度的最大值】
 * 右侧同理
 *
 * 时间复杂度： O(n)
 * 空间复杂度： O(n)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;
  let ans = 0;
  let leftMax = new Array(height.length).fill(0),
    rightMax = new Array(height.length).fill(0);

  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  for (let i = 1; i < height.length - 1; i++) {
    let minWall = Math.min(leftMax[i], rightMax[i]);
    if (minWall > height[i]) {
      ans += minWall - height[i];
    }
  }
  return ans;
};

/**
 * !最终解法 我的代码
 * 和下面的题解代码略有不同
 * 但是我觉得我的代码更好懂
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;

  let res = 0;
  // 左边墙的高度初始值为第一个元素 右边墙的高度初始值是最后一个元素
  let leftWall = height[0],
    rightWall = height[height.length - 1];

  // 定义双指针
  let left = 1,
    right = height.length - 2;

  // 注意这里必须是小于等于  如果是严格小于 那么left==right的那个元素不会被计算
  while (left <= right) {
    let value = 0;
    // 如果左边的墙小于右边的墙，那么去算左边的  因为右边的墙只会更高
    if (leftWall < rightWall) {
      value = leftWall - height[left];
      leftWall = Math.max(leftWall, height[left]);
      left++;
    } else {
      value = rightWall - height[right];
      rightWall = Math.max(rightWall, height[right]);
      right--;
    }
    value > 0 && (res += value);
  }
  return res;
};
/**
 * !最终解法 题解中的代码
 * 动态规划的改进 双指针法
 * 动态规划中，我们常常可以对空间复杂度进行进一步的优化。
 * 具体细节见题解
 *
 * 时间复杂度： O(n)
 * 空间复杂度： O(1)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;
  // 左指针和右指针
  let left = 1,
    right = height.length - 2;
  // 左边最高墙的高度 和 右边最高墙的高度
  let leftMax = 0,
    rightMax = 0;
  let ans = 0;

  for (let i = 1; i < height.length - 1; i++) {
    /**
     * 如果下面的还是看不懂的话，
     * 去看看官方题解下排名第二的评论
     * 如果left-1处的高度小于right + 1处的高度
     * 那么对于left来说， 其左边的墙的最高高度一定小于右边的墙的最高高度
     * 因为左边墙的最大高度是通过与left-1处的高度取最大值来的
     * 而右边墙的高度是通过与right+1处的墙取最大值，然后往左一直取最大值来的
     * 因此右边墙的最高高度肯定更高
     * 而左边墙的最高高度要小于右边的
     * 因此从左往右遍历，取计算left处的雨水数量
     *
     * 反之从右往左遍历 去计算right处的雨水的数量
     */
    if (height[left - 1] < height[right + 1]) {
      leftMax = Math.max(leftMax, height[left - 1]);
      if (leftMax > height[left]) {
        ans += leftMax - height[left];
      }
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right + 1]);
      if (rightMax > height[right]) {
        ans += rightMax - height[right];
      }
      right--;
    }
  }
  return ans;
};
