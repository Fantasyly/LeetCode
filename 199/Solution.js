/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 时间复杂度: O(N) N为二叉树的节点的个数
 * 空间复杂度: O(N) 主要是队列的空间开销
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  let queue = [root];
  let res = [];

  while (queue.length) {
    let len = queue.length;
    res.push(queue[queue.length - 1].val);
    while (len) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
  }
  return res;
};
