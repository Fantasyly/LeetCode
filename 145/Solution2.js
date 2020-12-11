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
   * 迭代解法(双色标记法)
   */
  const WHITE = 0,
    GRAY = 1;
  let result = [];
  let stack = [];
  stack.push([WHITE, root]);
  while (stack.length) {
    const [status, node] = stack.pop();
    if (status === WHITE) {
      stack.push([GRAY, node]);
      node.right && stack.push([WHITE, node.right]);
      node.left && stack.push([WHITE, node.left]);
    } else {
      result.push(node.val);
    }
  }
  return result;
};
