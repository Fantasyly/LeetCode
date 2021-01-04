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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  /**
   *  当前节点如果大于high, 那么当前节点和右子树就都不满足条件
   *  最后求得结果肯定是在左子树上, 那么直接令root = trimBst(root.left)
   *
   *  当前节点如果小于low, 那么当前节点和左子树就都不满足条件
   *  最后求得的结果肯定是在右子树上, 那么直接令root = trimBst(root.right);
   *
   *  如果root的值处于区间内, 那么root是满足要求的
   *  此时要修剪左右子树,
   *  因此有     root.left = trimBST(root.left, low, high);
   *            root.right = trimBST(root.right, low, high);
   *
   *  时间复杂度：O(N)，其中 N 是给定的树的全部节点。我们最多访问每个节点一次。
   *  空间复杂度：O(N)，即使我们没有明确使用任何额外的内存，在最糟糕的情况下，我们递归调用的栈可能与节点数一样大。
   */
  if (!root) return null;
  if (root.val > high) {
    root = trimBST(root.left, low, high);
  } else if (root.val < low) {
    root = trimBST(root.right, low, high);
  } else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  }
  return root;
};
