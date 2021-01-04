/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 这道题是二叉搜索树的最近公共祖先
 * 可以用二叉树的那个代码直接AC
 * 但是这样的话效率较低 且没有用到二叉搜索树的性质
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /**
   * 普通二叉树的解法
   */
  if (!root) return null;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (root === p || root === q) return root;
  if (left && right) return root;
  if (left) return left;
  return right;
};

/**
 * 根据二叉搜索树的性质可知
 * 如果pq的值都大于root的值 那么p和q肯定都出现在右子树, 直接去递归右子树
 * 如果pq的值都小于root的值  直接左子树
 * 否则root就是最近公共祖先, 因为此时p和q必是分属于左右子树的
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};
