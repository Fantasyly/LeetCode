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
 * @return {number}
 */
var maxDepth = function (root) {
  /**
   * dfs解决
   * 时间复杂度: O(n) n为二叉树的节点个数
   * 空间复杂度: O(H) H为二叉树的高度
   */
  if (!root) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

var maxDepth = function (root) {
  /**
   * 时间复杂度: O(n) n为二叉树的节点个数
   */
  if (!root) return 0;
  let queue = [root];
  let level = 0;

  while (queue.length) {
    let len = queue.length;
    level++;
    while (len) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
  }
  return level;
};
