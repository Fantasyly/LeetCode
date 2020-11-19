/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums) return;

  /**
   * 看前面的那个python解法就好了
   * 这个代码是最初写的
   * 没用之前那个思路
   * 直接用的JS提供的 Array.prototype.splice方法
   * 这个方法能删除当前位置的元素 并且使后面的元素挨个排上来
   *
   * 这个代码的思路也是双指针
   * 不过right指针只用作边界
   * 首先right指针从右往左找到第一个不是0的数 这里就是遍历的边界
   * 然后left从左开始出发
   *    如果是0的话 则删除当前元素 并在数组末尾添加0
   *    注意删除元素的时候 left不用再动了 而right需要--
   */
  let left = 0,
    right = nums.length - 1;
  while (right >= 0 && nums[right] === 0) {
    right--;
  }

  while (left < right) {
    if (nums[left] === 0) {
      nums.splice(left, 1);
      nums.push(0);
      right--;
      continue;
    }
    left++;
  }
};
