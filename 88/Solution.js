/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    temp = nums1.slice(0, m),
    index = 0;
  while (i < m && j < n) {
    let value1 = temp[i],
      value2 = nums2[j];
    if (value1 > value2) {
      nums1[index++] = value2;
      j++;
    } else {
      nums1[index++] = value1;
      i++;
    }
  }

  while (j < n) {
    nums1[index++] = nums2[j++];
  }

  while (i < m) {
    nums1[index++] = temp[i++];
  }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    index = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[index--] = nums1[i];
      i--;
    } else {
      nums1[index--] = nums2[j];
      j--;
    }
  }
  while (j >= 0) {
    nums1[index--] = nums2[j--];
  }
};
