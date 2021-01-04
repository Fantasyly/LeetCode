/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   * 首先说一下思路
   * 比较容易想到的方法是先用二分查找找到target出现的位置
   * 然后线性向左查找第一次出现的位置
   * 线性向右查找最后一次出现的位置
   * 但是这种方法有可能变成O(n)的时间复杂度
   *
   * 因此O(logn)的思路是
   * 首先使用二分查找找到第一次出现的位置,得到firstPos
   * 然后如果第一次返回的是-1  说明不存在 直接返回[-1, -1]
   * 然后使用二分查找去找最后一次出现的位置,lastPos
   * return [firstPos, lastPos]
   *
   * 重要: 看一下找第一个和最后一个时二分查找的区间缩小的理解
   *
   * 时间复杂度: O(2logn) = O(logn)
   * 空间复杂度: O(1)
   *
   */
  if (!nums) return [-1, 1];

  const findStart = (nums, target) => {
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      let mid = (left + right) >>> 1;
      console.log(`first: ${mid}`);
      if (nums[mid] < target) {
        /**
         * 因为要找到第一个出现的位置,
         * 因此想办法去缩减左边的区间
         * 当mid的值小于target时, 左边的区间肯定没有第一次出现的位置
         * 所以要从左往右找第一个位置
         * 缩减左边区间
         */
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return nums[left] === target ? left : -1;
  };

  const findLast = (nums, target) => {
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      let mid = (left + right + 1) >>> 1;
      console.log(`last: ${mid}`);
      if (nums[mid] > target) {
        /**
         * 因为要找到最后一个出现的位置
         * 因此要想办法去缩减右边的区间
         * 当mid的值大于target时, 右边的区间肯定不会有最后一次出现的位置
         * 所以要从右往左找第一个位置
         */
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    return left;
  };

  let firstPos = findStart(nums, target);
  if (firstPos === -1) {
    return [-1, -1];
  }
  let lastPos = findLast(nums, target);
  return [firstPos, lastPos];
};
