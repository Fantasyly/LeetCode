/**
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(n^2)
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  /**
   * 用于给每块岛屿染色 并求出该岛屿面积的dfs函数
   * index为染色标记 从-1开始递减
   */
  const dfs = (grid, x, y, index) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return 0;
    }
    if (grid[x][y] !== 1) {
      return 0;
    }

    grid[x][y] = index;
    return (
      1 +
      dfs(grid, x - 1, y, index) +
      dfs(grid, x + 1, y, index) +
      dfs(grid, x, y + 1, index) +
      dfs(grid, x, y - 1, index)
    );
  };

  /**
   * 用于给一个海洋节点寻找四周陆地节点的函数
   * 并且实现去重
   */
  const findNeighbors = (grid, x, y) => {
    let res = new Set();
    if (x > 0 && grid[x - 1][y] !== 0) {
      res.add(grid[x - 1][y]);
    }
    if (x < grid.length - 1 && grid[x + 1][y] !== 0) {
      res.add(grid[x + 1][y]);
    }
    if (y > 0 && grid[x][y - 1] !== 0) {
      res.add(grid[x][y - 1]);
    }
    if (y < grid[0].length - 1 && grid[x][y + 1] !== 0) {
      res.add(grid[x][y + 1]);
    }
    return res;
  };

  // map存储岛屿编号 和 面积大小
  let map = new Map();

  // 初始岛屿编号为-1
  let index = -1;

  // 存储最大的岛屿面积
  let ans = 0;

  // 第一次DFS 进行染色
  grid.forEach((row, x) => {
    row.forEach((column, y) => {
      if (grid[x][y] === 1) {
        // 染色并求出面积
        let res = dfs(grid, x, y, index);

        // 存储对应的面积大小和岛屿编号
        map.set(index, res);

        // 编号递减
        index--;
        if (res > ans) {
          ans = res;
        }
      }
    });
  });

  // 如果一块岛屿都没有的话 直接就造一块返回出去
  if (ans === 0) return 1;

  // 第二次DFS 填海造陆 寻找海洋节点
  grid.forEach((row, x) => {
    row.forEach((column, y) => {
      if (grid[x][y] === 0) {
        // 对当前海洋节点寻找四周的陆地节点
        let set = findNeighbors(grid, x, y);

        // 当前面积为1
        let res = 1;

        // 遍历四周的陆地节点 计算连接后的岛屿面积(邻居节点已去重)
        for (const value of set) {
          res += map.get(value);
        }

        // 如果当前面积大于最大面积 记录最大面积
        if (res > ans) {
          ans = res;
        }
      }
    });
  });
  return ans;
};
/**
 * 暴力解法
 * 时间复杂度: O(N^4)
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let ans = 0;

  const dfs = (grid, x, y) => {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
      return 0;
    }
    if (grid[x][y] !== 1) {
      return 0;
    }
    grid[x][y] = 2;

    return (
      1 + dfs(grid, x - 1, y) + dfs(grid, x + 1, y) + dfs(grid, x, y + 1) + dfs(grid, x, y - 1)
    );
  };

  grid.forEach((row, x) => {
    row.forEach((column, y) => {
      let temp = JSON.parse(JSON.stringify(grid));

      temp[x][y] = 1;
      console.log(temp);
      let res = dfs(temp, x, y);
      console.log(res);
      console.log("------------------");
      if (res > ans) {
        ans = res;
      }
    });
  });
  return ans;
};
