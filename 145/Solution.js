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
var postorderTraversal = function (root) {
  /**
   * 递归解法
   */
  if (!root) return [];
  let result = [];

  const postOrder = root => {
    root.left && postOrder(root.left);
    root.right && postOrder(root.right);
    result.push(root.val);
  };
  postOrder(root);
  return result;
};
