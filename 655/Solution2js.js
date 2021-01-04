/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  if (nums.length === 0) return false;

  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      // 出现拐点 count++
      count++;

      /**
       * 排除掉特殊情况
       * 什么是特殊情况: 看例子
       * 比如说2 4 0 1
       * 拐点在4的位置, 此时去回想思路1中的两种解决办法
       * 方法1 缩小4  但是不满足前提 不满足nums[i - 1] <= nums[i + 1]
       * 那就只能采用方法2  也就是放大 使得nums[i + 1] = nums[i],即2 4 4 1
       * 但是放大的后果就是产生了新的拐点
       * 为什么会产生新的拐点呢? 原因就是拐点 > 拐点的下一个值的下一个值 即 nums[i] > nums[i + 2]
       * 特殊情况就是无法缩小,只能放大,但是放大却会产生新的拐点,这种情况肯定是不能1次就解决的
       * 因此直接返回false
       * 综上: 判断条件就是 无法缩小且放大会产生新的拐点
       *          也就是  nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]
       *          同时注意数组索引别越界
       */
      if (
        i + 1 >= 0 &&
        nums[i - 1] > nums[i + 1] &&
        i + 2 <= nums.length - 1 &&
        nums[i] > nums[i + 2]
      ) {
        return false;
      }
    }

    /**
     * 接下来判断下count的值
     * 在去除掉上面的特殊情况下
     * 仍出现的拐点就只能是可以一次缩放就能解决的   但是却出现了多个这种一次缩放能解决的拐点
     * 也是不满足要求的 返回false
     */
    if (count === 2) return false;
  }
  return true;
};
