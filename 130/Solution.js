/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length || !board[0].length) return;
  const m = board.length,
    n = board[0].length;

  /**
   * 把边界上的O作为起点去dfs 改成A
   */

  // 第一行和最后一行
  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") {
      dfs(0, i);
    }
    if (board[m - 1][i] === "O") {
      dfs(m - 1, i);
    }
  }

  // 第一列和最后一列
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") {
      dfs(i, 0);
    }
    if (board[i][n - 1] === "O") {
      dfs(i, n - 1);
    }
  }

  // 遍历，把A改成O，把O改成X
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "A") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return;
    }

    if (board[x][y] !== "O") {
      return;
    }

    board[x][y] = "A";

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }
};
