/**
 * 推荐的解法: 逐层模拟
 * 比较直观
 * 时间复杂度： O(mn)
 * 空间复杂度： O(1)
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  /**
   * left和right分别表示两条纵向的线
   * 分别从左右两边往中间挤压
   *
   * top和bottom表示两条横向的线
   * 分别从上下两边往中间挤压
   */
  let left = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    top = 0;
  let total = matrix.length * matrix[0].length;
  const res = [];
  while (total > 0) {
    //从左往右
    for (let i = left; i <= right && total > 0; i++) {
      res.push(matrix[left][i]);
      total--;
    }
    // 这一层遍历完了 top线往下挤压
    top++;

    // 从上往下
    for (let i = top; i <= bottom && total > 0; i++) {
      res.push(matrix[i][right]);
      total--;
    }
    // 这一列遍历完了 right线往左挤压
    right--;

    // 从右往左
    for (let i = right; i >= left && total > 0; i--) {
      res.push(matrix[bottom][i]);
      total--;
    }

    // 这一层遍历完了 bottom往上挤压
    bottom--;

    // 从下往上
    for (let i = bottom; i >= top && total > 0; i--) {
      res.push(matrix[i][left]);
      total--;
    }
    // 这一列遍历完了 left往右挤压
    left++;
  }
  return res;
};

/**
 * 模拟 和我下面自己的解法一样
 * 只不过我自己当时用的是递归
 * 这里用的是循环
 * 对于index的处理比我初始的代码更优
 * 时间复杂度： O(mn)
 * 空间复杂度： O(1)
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  const size = matrix.length * matrix[0].length;
  const dir = [
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
    [-1, 0], //up
  ];
  const res = [];
  let index = 0,
    x = 0,
    y = 0;

  for (let i = 0; i < size; i++) {
    res.push(matrix[x][y]);
    matrix[x][y] = "visted";
    let newX = x + dir[index][0],
      newY = y + dir[index][1];
    if (
      newX < 0 ||
      newY < 0 ||
      newX >= matrix.length ||
      newY >= matrix[0].length ||
      matrix[newX][newY] === "visted"
    ) {
      // 任何一个条件满足 都应该去更换方向
      index = (index + 1) % 4; // 这一行记住！！！！！
    }
    x += dir[index][0];
    y += dir[index][1];
  }
  return res;
};
/**
 * !这个是我自己的代码
 * 题解的代码更好一些
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  const size = matrix.length * matrix[0].length;
  const dir = [
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
    [-1, 0], //up
  ];
  const res = [];
  let index = 0;
  const dfs = (matrix, x, y) => {
    if (res.length === size) {
      return;
    }
    if (
      x < 0 ||
      y < 0 ||
      x >= matrix.length ||
      y >= matrix[0].length ||
      matrix[x][y] === "visted"
    ) {
      // 指针回退
      x -= dir[index][0];
      y -= dir[index][1];

      // 更新方向
      if (index === 3) {
        index = 0;
      } else {
        index++;
      }

      // 更新指针
      x += dir[index][0];
      y += dir[index][1];
    }
    if (matrix[x][y] === "visted") {
      return;
    }
    res.push(matrix[x][y]);
    matrix[x][y] = "visted";

    x += dir[index][0];
    y += dir[index][1];
    dfs(matrix, x, y);
  };
  dfs(matrix, 0, 0);
  return res;
};
