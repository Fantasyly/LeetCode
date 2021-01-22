/**
 * 时间复杂度:O(log(mn))
 * 空间复杂度:O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;

  if (!m || !n) return false;

  let left = 0,
    right = m * n - 1;

  while (left < right) {
    let mid = (left + right) >>> 1;

    let row = Math.floor(mid / n),
      column = mid % n;
    if (matrix[row][column] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return matrix[Math.floor(row / n)][row % n] === target;
};
/**
 * 自己的方法
 * 太慢了
 * 做了两次二分查找！！！！
 * 怎么就没想起来做一次呢
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let left = 0,
    right = matrix.length - 1,
    column = matrix[0].length;

  while (left < right) {
    let mid = (left + right) >>> 1;
    if (matrix[mid][column] === target) {
      return true;
    }
    if (matrix[mid][column] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let row = mid;

  left = 0;
  right = matrix[row].length - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;

    if (matrix[row][mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return matrix[row][left] === target;
};
