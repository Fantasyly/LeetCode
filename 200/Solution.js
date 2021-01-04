/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  /**
   * 时间复杂度：O(MN)，其中 M 和 N分别为行数和列数。
   * 空间复杂度：O(MN)，在最坏情况下，整个网格均为陆地，深度优先搜索的深度达到 MN
   */
  if (!grid.length || !grid[0].length) return 0;
  let count = 0;

  grid.forEach((item, x) => {
    item.forEach((location, y) => {
      if (location === "1") {
        dfs(grid, x, y);
        count++;
      }
    });
  });
  return count;
};
function dfs(grid, x, y) {
  // 如果当前位置不在网格内 return
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
    return;
  }

  // 如果当前不是陆地 return
  if (grid[x][y] !== "1") {
    return;
  }

  // 把当前陆地标记为2  表示已经标记过
  grid[x][y] = "2";

  // 递归四个方向
  dfs(grid, x - 1, y); //up
  dfs(grid, x + 1, y); //down
  dfs(grid, x, y - 1); //left
  dfs(grid, x, y + 1); //right
}
