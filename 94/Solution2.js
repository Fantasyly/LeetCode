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
   * 迭代--双色标记法
   */

  if (!root) return [];
  const WHITE = 0,
    GRAY = 1;
  let res = [];
  let stack = [];
  stack.push([WHITE, root]);

  while (stack.length) {
    const [status, node] = stack.pop();

    if (status === WHITE) {
      node.right && stack.push([WHITE, node.right]);
      stack.push([GRAY, node]);
      node.left && stack.push([WHITE, node.left]);
    } else {
      res.push(node.val);
    }
  }
  return res;
};
