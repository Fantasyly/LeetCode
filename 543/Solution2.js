/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  /**
   * 树的直径是指从任意节点出发到任意节点之间的路径的最大值
   * 直观上想, 这样的两个节点应该是左子树最深的那个节点到右子树最深的节点的距离
   * 因此, 最后的结果就是递归左子树的结果 + 递归右子树的结果
   * 时间复杂度: O(N) N为二叉树中节点的个数
   * 空间复杂度: O(H) H为二叉树的高度 最坏情况下 为N
   */
  if (!root) return 0;
  let res = 0;

  const depth = root => {
    if (!root) return 0;

    let left = depth(root.left);
    let right = depth(root.right);

    // 如果当前左子树的值 + 右子树的值更大的话  保存它
    res = Math.max(res, left + right);

    /**
     *       1
     *      / \
     *     2  3
     * 对于节点2  其得到的left和right都是0  因此返回的值是0 + 1 = 1
     * 这样节点1就能得到left为1
     */
    return Math.max(left, right) + 1;
  };

  depth(root);
  return res;
};
