/**
 * 时间复杂度：O(log(min(m,n)))
 * 空间复杂度:O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 使得nums1为长度较短的数组
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length,
    n = nums2.length;

  let totalLeft = (m + (n - m + 1) / 2) | 0;
  // let totalLeft = (m  + n + 1) >>> 1;

  /**
   * 为什么right是m？
   * 因为我们要确定的分割线的位置是可以取到m的
   */
  let left = 0,
    right = m;
  /**
   * 正确的划分应该满足
   * nums1[i - 1] <= nums2[j] && nums2[j - 1] <= nums1[i]
   * 在二分查找排除区间的时候
   * 只需要对上面的条件去取反即可
   * 也就是
   * nums1[i - 1] > nums2[j] || nums2[j - 1] > nums1[i]
   * 所以二分查找的时候，选择一个条件判断去排除掉一半区间就可以了
   */
  while (left < right) {
    let i = (left + right + 1) >>> 1;
    let j = totalLeft - i;

    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }

    // 以下写法也可 但是要注意确定i的值的时候 要改成let i = (left + right) >>> 1;
    // if (nums2[j - 1] > nums1[i]) {
    //   left = i + 1;
    // } else {
    //   right = i;
    // }
  }

  let i = left;
  let j = totalLeft - i;

  let nums1Left = i === 0 ? -Infinity : nums1[i - 1];
  let nums1Right = i === m ? Infinity : nums1[i];
  let nums2Left = j === 0 ? -Infinity : nums2[j - 1];
  let nums2Right = j === n ? Infinity : nums2[j];
  if ((m + n) % 2 === 0) {
    return (Math.max(nums1Left, nums2Left) + Math.min(nums2Right, nums1Right)) / 2;
  } else {
    return Math.max(nums1Left, nums2Left);
  }
};
