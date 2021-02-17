/**
 * 原地哈希
 * 时间复杂度:O(N)
 * 空间复杂度:O(1)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let len = nums.length;
  if (len === 0) return 1;

  for (let i = 0; i < len; i++) {
    while (nums[i] >= 1 && nums[i] <= len) {
      // 当前值放到他应该出现的位置
      let index = nums[i] - 1;

      // 如果那个位置的值已经是满足的了 则break
      if (nums[index] === nums[i]) {
        break;
      }
      [nums[index], nums[i]] = [nums[i], nums[index]];
    }

    /**
     * 上面的while循环可以写成如下的样子
     * 但是有个地方需要改一下
     */
    //while (nums[i] >= 1 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
      /**
       * 下面注释掉的这句话是不行的
       * 因为它首先会把nums[nums[i] - 1]的值赋值给nums[i]
       * 这样的话nums[i]的值就改了
       * 第二次给nums[nums[i] - 1]]赋值时这个索引就变了
       */
      // [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
      //[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    //}
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return len + 1;
};

/**
 * 使用哈希表
 * 时间复杂度:O(N) 把数组存入哈希表中的复杂度
 * 空间复杂度:O(N) 哈希表的空间消耗
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive2 = function (nums) {
  if (!nums.length) return 1;

  let set = new Set(nums);

  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) return i;
  }

  return 1;
};
