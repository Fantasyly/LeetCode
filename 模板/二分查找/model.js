/**
 *
 * @param {number[]} nums
 * @param {number} target
 */

/**
 * 在这里为大家归纳出最重要的部分：
 * 分析题意，挖掘题目中隐含的 单调性；
 * 1. while (left < right) 退出循环的时候有 left == right 成立，
 *     因此无需考虑返回 left 还是 right；
 * 2. 始终思考下一轮搜索区间是什么，
 *     如果是 [mid, right] 就对应 left = mid ，
 *     如果是 [left, mid - 1] 就对应 right = mid - 1，是保留 mid 还是 +1、−1 就在这样的思考中完成；
 * 3. 从一个元素什么时候不是解开始考虑下一轮搜索区间是什么 ，
 *     把区间分为 2 个部分（一个部分肯定不存在目标元素，另一个部分有可能存在目标元素），
 *     问题会变得简单很多，这是一条 非常有用 的经验；
 * 4. 每一轮区间被划分成 2 部分，理解 区间划分 决定中间数取法（ 无需记忆，需要练习 + 理解 ），
 *     在调试的过程中理解 区间和中间数划分的配对关系：
 * 5. 划分 [left, mid] 与 [mid + 1, right] ，mid 被分到左边，对应 int mid = left + (right - left) / 2;；
 * 6. 划分 [left, mid - 1] 与 [mid, right] ，mid 被分到右边，对应 int mid = left + (right - left + 1) / 2;。
 * 至于为什么划分是这种对应关系，原因在于区间只有 2 个数的时候，
 * 如果中间数的取法不对，一旦进入的分支不能使得区间缩小，会出现 死循环。
 * 暂时不理解问题不大，需要在练习中进行调试；
 * 退出循环的时候有 left == right 成立，此时如果能确定问题一定有解，返回 left 即可，
 * 如果不能确定，需要单独判断一次。
 */
const binarySearch1 = (nums, target) => {
  // 划分 [left, mid] 与 [mid + 1, right]
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      // 当前值严格小于target, 下一轮搜索区间为[mid + 1, right]
      left = mid + 1;
    } else {
      // 当前值大于等于target, 下一轮搜索区间为[left, mid]
      right = mid;
    }
  }
  return left;
};

const binarySearch2 = (nums, target) => {
  //划分 [left, mid - 1] 与 [mid, right]
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    // 或者
    //let mid = left + Math.ceil((right - left) / 2);
    let mid = left + Math.floor((right - left + 1) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};
