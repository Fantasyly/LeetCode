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
   * 改进  把路径数组去掉 使用len  len表示已经走过的路程
   */
  if (!root) return 0;
  if (!root.left && !root.right) return 0;
  const LEFT = -1,
    RIGHT = 1;
  let maxLen = 0;

  const dfs = (root, direction, len) => {
    if (!root) return;

    if (direction === LEFT) {
      if (root.left) {
        dfs(root.left, RIGHT, len + 1);
      }

      maxLen = Math.max(len, maxLen);
      if (root.right) {
        dfs(root.right, LEFT, 1);
      }
    } else {
      if (root.right) {
        dfs(root.right, LEFT, len + 1);
      }
      maxLen = Math.max(len, maxLen);
      if (root.left) {
        dfs(root.left, RIGHT, 1);
      }
    }
  };

  dfs(root, LEFT, 0);
  dfs(root, RIGHT, 0);

  return maxLen - 1;
};
