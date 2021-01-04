/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;

  let left = 2,
    right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid ** 2 < x) {
      left = mid + 1;
    } else if (mid ** 2 > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return right;
};
