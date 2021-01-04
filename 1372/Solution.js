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
   * 这种写法在一些特殊用例下会超时
   *
   * 时间复杂度: O(n) n为节点个数
   * 空间复杂度: O(maxLen) path存储节点个数, 最多需要maxLen的空间
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
    } else {
      // 进入else  说明下一个方向是去右边

      // 如果右节点存在的话 就继续去深搜 并且把方向改为左
      if (root.right) {
        dfs(root.right, LEFT, path);
      }

      //   如果右节点不存在 结束! 取最大值
      maxLen = Math.max(maxLen, path.length);
    }
    // 删除该元素
    path.pop();
  };

  /**
   *
   * 递归把每个节点作为初始节点去深搜
   */
  const longPath = root => {
    dfs(root, LEFT, []);
    dfs(root, RIGHT, []);

    root.left && longPath(root.left);
    root.right && longPath(root.right);
  };
  longPath(root);

  return maxLen - 1;
};
