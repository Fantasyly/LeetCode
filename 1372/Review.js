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
  if (!root) return 0;
  if (!root.left && !root.right) return 0;

  const LEFT = -1,
    RIGHT = 1;
  let maxLen = 0;

  const dfs = (root, direction, path) => {
    if (!root) return;

    path.push(root);

    if (direction === LEFT) {
      if (root.left) {
        dfs(root.left, RIGHT, path);
      }

      maxLen = Math.max(maxLen, path.length);
      if (root.right) {
        path = [];
        path.push(root);
        dfs(root.right, LEFT, path);
      }
    } else {
      if (root.right) {
        dfs(root.right, LEFT, path);
      }
      maxLen = Math.max(maxLen, path.length);
      if (root.left) {
        path = [];
        path.push(root);
        dfs(root.left, RIGHT, path);
      }
    }

    path.pop();
  };
  dfs(root, LEFT, []);
  dfs(root, RIGHT, []);
  return maxLen - 1;
};
