/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) return [];
  if (n === 1) return [[1]];

  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let total = n ** 2;
  let value = 1;
  while (total > 0) {
    for (let i = left; i <= right && total > 0; i++) {
      res[top][i] = value++;
      total--;
    }
    top++;

    for (let i = top; i <= bottom && total > 0; i++) {
      res[i][right] = value++;
      total--;
    }
    right--;

    for (let i = right; i >= left && total > 0; i--) {
      res[bottom][i] = value++;
      total--;
    }
    bottom--;

    for (let i = bottom; i >= top && total > 0; i--) {
      res[i][left] = value++;
      total--;
    }
    left++;
  }
  return res;
};
