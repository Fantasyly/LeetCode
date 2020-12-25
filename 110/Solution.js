/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//! 自己的做法
/**
 * 最开始自己写的解法
 * 时间复杂度: O(n) n为二叉树节点的个数
 * 空间复杂度: O(h) h为二叉树的深度
 * @param {TreeNode} root
 */
var isBalanced = function (root) {
  if (!root) return true;
  let flag = true;

  const dfs = root => {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (Math.abs(left - right) > 1) {
      flag = false;
    }

    return Math.max(left, right) + 1;
  };

  dfs(root);
  return flag;
};

/**
 * !自顶向下解法
 *  自顶向下的效率比较低
 *  因为要首先求出根节点的左子树和右子树的高度
 *  然后再去判断子树的高度
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

/**
 * 得到以root为根节点的树的高度
 * @param {TreeNode} root
 */
function height(root) {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
}
