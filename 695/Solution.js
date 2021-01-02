/**
 * 时间复杂度: O(mn)
 * 空间复杂度: O(mn)
 */
var maxAreaOfIsland = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let maxCount = 0;
  const dfs = (grid, x, y) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return 0;
    }

    if (grid[x][y] !== 1) {
      return 0;
    }

    grid[x][y] = 2;
    count++;
    if (count > maxCount) {
      maxCount = count;
    }

    return (
      1 + dfs(grid, x - 1, y) + dfs(grid, x + 1, y) + dfs(grid, x, y - 1) + dfs(grid, x, y + 1)
    );
  };

  grid.forEach((row, x) => {
    row.forEach((column, y) => {
      let a = dfs(grid, x, y);
      maxCount = Math.max(a, maxCount);
    });
  });
  return maxCount;
};

/**
 * 时间复杂度: O(mn)
 * 空间复杂度: O(mn)
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let maxCount = 0;
  let count = 0;

  const dfs = (grid, x, y) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return;
    }

    if (grid[x][y] !== 1) {
      return;
    }

    grid[x][y] = 2;
    count++;
    if (count > maxCount) {
      maxCount = count;
    }

    dfs(grid, x - 1, y);
    dfs(grid, x + 1, y);
    dfs(grid, x, y - 1);
    dfs(grid, x, y + 1);
  };
  grid.forEach((row, x) => {
    row.forEach((column, y) => {
      dfs(grid, x, y);
      count = 0;
    });
  });
  return maxCount;
};
