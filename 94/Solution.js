/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  /**
   * 递归解法
   */
  if (!root) return [];
  let res = [];

  const inOrder = root => {
    root.left && inOrder(root.left);
    res.push(root.val);
    root.right && inOrder(root.right);
  };
  inOrder(root);
  return res;
};
