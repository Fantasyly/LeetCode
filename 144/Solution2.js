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
   * 前序遍历迭代 -- 双色标记法
   */
  if (!root) return [];

  // 白色表示还没遍历的新节点  灰色表示已经遍历过的旧节点
  const WHITE = 0,
    GRAY = 1;
  let stack = [];
  stack.push([WHITE, root]);
  let res = [];

  while (stack.length) {
    const [staus, node] = stack.pop();

    if (staus === WHITE) {
      // 倒着看  根 左  右
      node.right && stack.push([WHITE, node.right]);
      node.left && stack.push([WHITE, node.left]);
      stack.push([GRAY, node]);
    } else {
      res.push(node.val);
    }
  }
  return res;
};
