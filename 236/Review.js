/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 时间复杂度: O(N) N为二叉树节点的个数
 * 空间复杂度: O(H) H为二叉树的高度, 最坏情况下为N
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // 如果当前节点就是p和q中的某个节点 那么就把当前节点返回上去
  if (root === p || root === q) {
    return root;
  }

  // 如果左子树中找到了p/q 且右子树找到了q/p 那么当前root就是结果 返回上去
  if (left && right) {
    return root;
  }

  // 如果只有left, 右子树没有p/q, 那么继续把left返回上去
  if (left) {
    return left;
  }
  return right;
};
