/**
 * 时间复杂度: O(mn)
 * 空间复杂度: O(mn)
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  const dfs = (grid, x, y) => {
    // 当前位置出去了 那么能提供一条边
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return 1;
    }

    // 如果当前位置是海洋 那么能提供1条边
    if (grid[x][y] === 0) {
      return 1;
    }

    // 如果当前位置是已经遍历过的 那么一条边都不能提供
    if (grid[x][y] === 2) {
      return 0;
    }

    // 标记当前位置已经被遍历过
    grid[x][y] = 2;

    return dfs(grid, x - 1, y) + dfs(grid, x + 1, y) + dfs(grid, x, y + 1) + dfs(grid, x, y - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        // 因为题目说的只有一个岛屿 因此直接返回即可
        return dfs(grid, i, j);
      }
    }
  }
};

/**
 * 这个是自己的写法
 * 代码有点啰嗦了
 * 直接看上面的代码吧
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (!grid.length || !grid[0].length) return 0;
  let res = 0;
  const dfs = (grid, x, y) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return;
    }

    if (grid[x][y] !== 1) {
      return;
    }

    res += helper(grid, x, y);
    grid[x][y] = 2;
    // console.log(res)

    dfs(grid, x - 1, y);
    dfs(grid, x + 1, y);
    dfs(grid, x, y + 1);
    dfs(grid, x, y - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        dfs(grid, i, j);
        return res;
      }
    }
  }
  return res;
};

function helper(grid, x, y) {
  let res = 4;
  if (x > 0 && (grid[x - 1][y] === 1 || grid[x - 1][y] === 2)) {
    res--;
  }
  if (x < grid.length - 1 && (grid[x + 1][y] === 1 || grid[x + 1][y] === 2)) {
    res--;
  }
  if (y < grid[0].length - 1 && (grid[x][y + 1] === 1 || grid[x][y + 1] === 2)) {
    res--;
  }
  if (y > 0 && (grid[x][y - 1] === 1 || grid[x][y - 1] === 2)) {
    res--;
  }

  return res;
}
