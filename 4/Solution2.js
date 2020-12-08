/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let m = nums1.length,
    n = nums2.length;
  // [0, m]
  let left = 0,
    right = m;

  // 计算分割线左侧的元素的个数  把多出来的放在左侧
  let totalLeft = (m + n + 1) >>> 1;

  while (left < right) {
    let i = (left + right + 1) >>> 1;
    let j = totalLeft - i;

    if (nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      left = i;
    }
  }

  let index1 = left;
  let index2 = totalLeft - left;
  let nums1Min = index1 === 0 ? -Infinity : nums1[index1 - 1];
  let nums1Max = index1 === m ? Infinity : nums1[index1];
  let nums2Min = index2 === 0 ? -Infinity : nums2[index2 - 1];
  let nums2Max = index2 === n ? Infinity : nums2[index2];

  if ((m + n) % 2 === 0) {
    return (Math.max(nums1Min, nums2Min) + Math.min(nums1Max, nums2Max)) / 2;
  } else {
    return Math.max(nums1Min, nums2Min);
  }
};
