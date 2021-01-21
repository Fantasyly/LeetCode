/**
 * 方法4
 * 最简单的解法
 * 时间复杂度：O(m + n)
 * 空间复杂度: O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /**
   * 这个解法的思路是
   * 从左下角开始，
   * 对于当前元素，如果大于目标值，这一行就可以删掉了，
   * 因为右边都是更大的，因此row--
   * 如果当前元素小于目标值的话，那么当前列就没用了，
   * 因为我们是自下往上，自左往右找的
   * 下面的那个肯定是比目标值大的
   * 因此此时col++
   * 具体的可以看题解的动画
   */
  if (!matrix.length || !matrix[0].length) return false;

  let column = 0,
    row = matrix.length - 1;
  while (column < matrix[0].length && row >= 0) {
    if (matrix[row][column] > target) {
      row--;
    } else if (matrix[row][column] < target) {
      column++;
    } else {
      return true;
    }
  }
  return false;
};
/**
 * 方法3
 * 搜索空间的缩减
 * 时间复杂度: O(nlogn)
 * 空间复杂度: O(logn)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const search = (left, right, up, down) => {
    // 子矩阵为空 直接返回false
    if (left > right || up > down) {
      return false;
    }

    // 如果目标值小于最小值或者大于最大值 直接返回false
    if (target < matrix[up][left] || target > matrix[down][right]) {
      return false;
    }

    let row = 0,
      mid = (left + right) >>> 1;

    /**
     * 在下面的循环结束后，matrix[row][mid]是这一列第一个大于target的值
     * 其左上角的那个矩阵和右下角的那个矩阵都是不满足条件的
     * 可以自己画个图试试
     */
    while (row <= down && matrix[row][mid] <= target) {
      if (matrix[row][mid] === target) {
        return true;
      }
      row++;
    }

    // mid那一列在row行前面的都是小于的  row行下面的都是大于的 肯定是不满足的
    // 如果有相等的 也在上面的循环中直接return了
    return search(left, mid - 1, row, down) || search(mid + 1, right, up, row - 1);
  };

  return search(0, matrix[0].length, 0, matrix.length);
};

/**
 * 方法2
 * 二分法搜索
 * 时间复杂度：O(log(n!))
 * 空间复杂度：O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const binearySearch = (start, vertical) => {
    let left = start,
      right = vertical ? matrix.length - 1 : matrix[0].length - 1;
    while (left < right) {
      let mid = (left + right) >>> 1;
      // 对该列进行搜索
      if (vertical) {
        // 判断一下当前值是否是目标值
        if (matrix[mid][start] < target) {
          left = mid + 1;
        } else {
          right = mid;
        }
      } else {
        if (matrix[start][mid] < target) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
    }

    if (vertical) {
      return matrix[left][start] === target;
    } else {
      return matrix[start][left] === target;
    }
  };

  // 找到较短的那条边作为循环结束的条件
  let shortDim = Math.min(matrix.length, matrix[0].length);
  for (let i = 0; i < shortDim; i++) {
    let verticalFind = binearySearch(i, true);
    let rowFind = binearySearch(i, false);
    if (verticalFind || rowFind) {
      return true;
    }
  }

  return false;
};

/**
 * 方法1
 * 暴力回溯
 * 超时
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const dfs = (matrix, x, y) => {
    if (x >= matrix.length || y >= matrix[0].length || matrix[x][y] > target) {
      return false;
    }
    if (matrix[x][y] === target) {
      return true;
    }

    return dfs(matrix, x + 1, y) || dfs(matrix, x, y + 1);
  };

  return dfs(matrix, 0, 0);
};
