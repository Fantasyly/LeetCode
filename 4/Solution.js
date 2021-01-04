/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /**
   * 时间复杂度: O(log(min(m,n)))
   * 空间复杂度: O(1)
   */
  // 使nums1始终为长度较小的数组 nums2为长度较大的数组
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length,
    n = nums2.length;
  let totalLeft = (m + n + 1) >>> 1;

  let left = 0,
    right = m;
  while (left < right) {
    let i = (left + right + 1) >>> 1;
    let j = totalLeft - i;

    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }

  right = totalLeft - left;
  let num1LeftMax = left === 0 ? -Infinity : nums1[left - 1];
  let num1RightMin = left === m ? Infinity : nums1[left];
  let num2LeftMax = right === 0 ? -Infinity : nums2[right - 1];
  let num2RightMin = right === n ? Infinity : nums2[right];

  if ((m + n) % 2 === 0) {
    return (Math.max(num1LeftMax, num2LeftMax) + Math.min(num1RightMin, num2RightMin)) / 2;
  } else {
    return Math.max(num1LeftMax, num2LeftMax);
  }
};
