/**
 * 时间复杂度:O(mn)
 * 空间复杂度:O(mn)
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let color = image[sr][sc];
  if (color === newColor) {
    return image;
  }
  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) {
      return;
    }
    if (image[x][y] !== color) {
      return;
    }
    image[x][y] = newColor;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  };
  dfs(sr, sc);
  return image;
};
