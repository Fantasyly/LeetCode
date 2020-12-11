/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  /**
   * 改进写法1  把双递归修改为单递归
   */
  if (!root) return 0;
  if (!root.left && !root.right) return 0;
  const LEFT = -1,
    RIGHT = 1;
  let maxLen = 0;

  // 进行深搜
  const dfs = (root, direction, path) => {
    if (!root) return;

    // 路径中push进去当前节点
    path.push(root);

    // 如果下一个方向要去左边
    if (direction === LEFT) {
      // 如果左节点存在的话 就继续去深搜 并且把方向改为右
      if (root.left) {
        dfs(root.left, RIGHT, path);
      }

      //   如果左节点不存在 比较当前path的长度和maxLen的长度 取最大值
      maxLen = Math.max(maxLen, path.length);

      // 改进 如果左节点不存在  把当前节点作为新的起点 去往右深搜 重置path
      path = [];
      path.push(root);
      dfs(root.right, LEFT, path);
    } else {
      // 进入else  说明下一个方向是去右边

      // 如果右节点存在的话 就继续去深搜 并且把方向改为左
      if (root.right) {
        dfs(root.right, LEFT, path);
      }

      //   如果右节点不存在 结束! 取最大值
      maxLen = Math.max(maxLen, path.length);

      // 改进 如果右节点不存在  把当前节点作为新的起点 去往左深搜 重置path
      path = [];
      path.push(root);
      dfs(root.left, RIGHT, path);
    }
    // 删除该元素
    path.pop();
  };

  dfs(root, LEFT, []);
  dfs(root, RIGHT, []);

  return maxLen - 1;
};
