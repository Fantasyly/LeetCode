/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n === 0) return [];

  // locations保存了每个位置是放皇后还是空着
  let locations = new Array(n);

  // board表示当前棋盘的格局，也就是影响结果
  // 为每一个皇后所在行和列和斜线都给其染色
  // 被染色的块就无法放置皇后
  let board = new Array(n);
  for (let i = 0; i < n; i++) {
    locations[i] = new Array(n).fill(".");
    board[i] = new Array(n).fill(0);
  }
  let res = [];

  /**
   * 将皇后放置在xy的位置，
   * 并修改行和列以及斜线上的位置为1
   * @param {Number} x
   * @param {Number} y
   */
  const putDown = (x, y) => {
    // 8个方向
    let dir = [
      [0, -1], // 左
      [0, 1], // 右
      [-1, 0], // 上
      [1, 0], // 下
      [-1, -1], // 左上
      [1, -1], // 左下
      [-1, 1], // 右上
      [1, 1], // 右下
    ];

    // 放置在当前位置上
    board[x][y] = 1;

    // 去影响8个方向的位置
    // 分别往8个方向填充i个
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < 8; j++) {
        let newX = x + i * dir[j][0];
        let newY = y + i * dir[j][1];
        if (newX < 0 || newY < 0 || newX >= n || newY >= n) {
          continue;
        }

        board[newX][newY] = 1;
      }
    }
  };

  const dfs = row => {
    /**
     * 如果k等于n的话
     * 说明当前已经成功放下了n个皇后了
     * 满足条件
     * 保存结果
     */
    if (row === n) {
      let temp = [];
      locations.forEach(element => temp.push(element.join("")));
      res.push(temp);
      return;
    }

    for (let i = 0; i < n; i++) {
      // 如果当前位置已经被影响了 则不能放
      if (board[row][i] === 1) continue;

      // 保存当前的染色结果 一会用于回溯
      let tempBoard = JSON.parse(JSON.stringify(board));

      // 放置皇后
      locations[row][i] = "Q";

      // 对其影响范围进行染色
      putDown(row, i);

      // 根据当前结果去判断是否可行
      dfs(row + 1);

      // 删除皇后
      locations[row][i] = ".";

      // 染色结果回溯
      board = JSON.parse(JSON.stringify(tempBoard));
    }
  };
  dfs(0);
  return res;
};
