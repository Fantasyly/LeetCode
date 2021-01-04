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
var maxPathSum = function (root) {
  /**
   * 时间复杂度: O(n) n为节点个数 每个节点都要遍历一遍
   * 空间复杂度: O(H) h为递归栈的开销  即树的深度
   */

  if (!root) return 0;
  let res = -Infinity;

  const dfs = root => {
    if (!root) return 0;
    // 从左子节点出发的局部路径最大值
    leftVal = dfs(root.left);
    // 从右子节点出发的局部路径最大值
    rightVal = dfs(root.right);

    /**
     * 比较从当前节点出发的子树的最大路径和 与 当前最大值
     * 题目说了可以不经过根节点,  那么从当前节点出发, 左子树 + 加右子树的 + 自己的值就是一个局部的路径和
     *
     */
    res = Math.max(res, root.val + Math.max(leftVal, 0) + Math.max(rightVal, 0));

    // 因为左右节点只能选择一条边  所以返回最大的那条 或者 哪条都不选(比如左右都是负的)
    return root.val + Math.max(leftVal, rightVal, 0);
  };
  dfs(root);
  return res;
};
