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
var preorderTraversal = function (root) {
  /**
   * 前序遍历递归
   */
  if (!root) return [];
  let res = [];

  const preOrder = root => {
    res.push(root.val);

    root.left && preOrder(root.left);
    root.right && preOrder(root.right);
  };
  preOrder(root);
  return res;
};
