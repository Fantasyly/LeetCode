/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  /**
   * 这道题比较简单 直接套二分查找的模板即可
   */
  const len = arr.length;
  if (len < 3) return 0;

  let left = 1,
    right = len - 2;
  while (left < right) {
    let mid = (left + right) >>> 1;

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
