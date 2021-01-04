/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
   * 这道题的思路就是 排序 + 双指针
   * 具体思路可以看官方题解
   * 当我们需要枚举数组中的两个元素时，
   * 如果我们发现随着第一个元素的递增，
   * 第二个元素是递减的，
   * 那么就可以使用双指针的方法，将枚举的时间复杂度从 O(N^2)减少至O(N)。
   *
   * 这道题去重的思路就是先排序
   * 然后固定first  second  去寻找third
   *  然后如果遇到相同的 就跳过
   * 时间复杂度: O(n^2)
   * 空间复杂度: O(logn) 忽略返回的res的空间
   * 排序的空间复杂度是O(logn)
   */
  if (!nums.length) return [];

  nums.sort((a, b) => a - b);
  const res = [];

  for (let first = 0; first < nums.length - 2; first++) {
    // 如果当前最左值上一个一样的话 就跳过 否则会出现重复
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }

    // 第三个值固定在最后
    let third = nums.length - 1;

    // second从first下一个开始循环
    for (let second = first + 1; second < nums.length - 1; second++) {
      // 如果当前的值等于上一个 那就直接跳过 否则会重复
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }

      // 确定目标值
      let target = -(nums[first] + nums[second]);

      // 确定third的位置
      while (nums[third] > target) {
        third--;
      }

      /**
       * 如果second和third相等了
       * 那么首先 当前肯定不满足
       * 其次 下一次循环中second会更大
       * 那么下一次也肯定找不到third
       * 因此 直接break second的循环
       * 然后直接去移动first
       */
      if (second === third) {
        break;
      }

      // 如果third满足要求且 值相等的话
      if (second < third && nums[third] === target) {
        res.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return res;
};
