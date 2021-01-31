/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  if (!board.length || !board[0].length) return [];

  let row = new Array(9),
    column = new Array(9),
    blocks = new Array(9);

  for (let i = 0; i < 9; i++) {
    row[i] = new Set();
    column[i] = new Set();
    blocks[i] = new Set();
  }
  board.forEach((elements, x) => {
    elements.forEach((value, y) => {
      if (value !== ".") {
        row[x].add(value);
        column[y].add(value);
        let index = getIndex(x, y);
        blocks[index].add(value);
      }
    });
  });

  dfs(0, 0);

  function dfs(x, y) {
    if (y === 9) {
      x++;
      y = 0;
      if (x === 9) {
        return true;
      }
    }

    if (board[x][y] !== ".") {
      return dfs(x, y + 1);
    }

    let index = getIndex(x, y);
    for (let i = 1; i <= 9; i++) {
      let number = i + "";
      if (row[x].has(number) || column[y].has(number) || blocks[index].has(number)) {
        continue;
      }

      board[x][y] = number;
      row[x].add(number);
      column[y].add(number);
      blocks[index].add(number);
      if (dfs(x, y + 1)) {
        return true;
      }
      board[x][y] = ".";
      row[x].delete(number);
      column[y].delete(number);
      blocks[index].delete(number);
    }
    return false;
  }
  /**
   * 根据xy计算其所属块的id
   * @param {Number} x
   * @param {Number} y
   */
  function getIndex(x, y) {
    return (((x / 3) | 0) * 3 + y / 3) | 0;
  }
};
