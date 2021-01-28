/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  // 记录board的长度
  const m = board.length;
  const n = board[0].length;
  const used = new Array(m);
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n);
  }

  // xy表示当前的坐标 i表示word中的索引
  const canFind = (x, y, i) => {
    // 当前的索引如果达到word的长度的话 说明在路上没有遇到错误的情况
    if (i >= word.length) {
      return true; // 递归的出口
    }
    // 当前的点应该在区域内
    if (x < 0 || x >= m || y < 0 || y >= n) {
      return false;
    }

    // 当前的值如果被遍历过 或者 当前的值不等于word中对应索引的值 返回false
    if (used[x][y] || word[i] != board[x][y]) {
      return false;
    }
    // 去除上面的情况 剩下的就是满足要求的

    // 首先给当前位置添加遍历过的标志
    used[x][y] = true;

    // 递归子程序去判断上下左右是否满足  这里包含隐式回溯
    const canFindRes =
      canFind(x - 1, y, i + 1) ||
      canFind(x, y + 1, i + 1) ||
      canFind(x + 1, y, i + 1) ||
      canFind(x, y - 1, i + 1);

    //   如果找到了的话 返回true
    if (canFindRes) {
      return true;
    }

    //   如果没找到的话 撤回当前遍历的标志
    used[x][y] = false;
    // 返回false
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
