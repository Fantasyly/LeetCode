/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  const len = arr.length;
  if (!len) return -1;

  let left = 1,
    right = Math.max(...arr);
  while (left < right) {
    let mid = (left + right) >>> 1;

    const sum = arr.reduce((sum, value) => {
      if (value > mid) {
        sum += mid;
      } else {
        sum += value;
      }
      return sum;
    }, 0);

    if (sum < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const sum1 = arr.reduce((sum, value) => {
    if (value > left) {
      sum += left;
    } else {
      sum += value;
    }
    return sum;
  }, 0);
  const sum2 = arr.reduce((sum, value) => {
    if (value > left - 1) {
      sum += left - 1;
    } else {
      sum += value;
    }
    return sum;
  }, 0);

  if (sum1 - target >= target - sum2) {
    return left - 1;
  } else {
    return left;
  }
};
