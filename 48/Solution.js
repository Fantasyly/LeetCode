/**
 * 采用辅助矩阵去做
 * matrix[i][j] 会旋转到 [j][matrix.length - 1 - i]
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(n^2)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const index = matrix.length - 1;
  if (!size) return;
  let temp = new Array(matrix.length);
  for (let i = 0; i < temp.length; i++) {
    temp[i] = new Array(matrix[0].length);
  }

  matrix.forEach(row => {
    row.forEach((value, i) => {
      temp[i][size--] = value;
    });
  });
  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      matrix[i][j] = temp[i][j];
    });
  });
};

/**
 * 原地旋转
 * 顺时针旋转的索引变化如下
 * matrix[i][j] 会旋转到 [j][matrix.length - 1 - i]
 *
 * 通过一个temp值，然后我们通过逆时针方向来实现顺时针的变化
 * 比如
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * 对于(0,0)这个位置，
 * 首先，temp = 1
 * 然后，7 替代 1
 *      9 替代 7
 *      3 替代 9
 *      temp 替代 3
 * 这样只需要一个temp就能实现顺时针旋转
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix.length) return;
  let n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
};

/**
 * 顺时针旋转90度等于 矩阵上下翻转 + 对角线翻转
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix.length) return;
  let n = matrix.length;

  // 上下翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
    }
  }

  // 沿对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
