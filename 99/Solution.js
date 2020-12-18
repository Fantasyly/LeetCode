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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  /**
   * 错误只会有两种：
   * 错误1，出现了两对不满足前小后大，将第一对的第一个元素与第二对的第二个元素交换。
   * 错误2，只出现一对不满足前小后大，交换这一对就行。
   *
   * 时间复杂度: O(n), n为树中节点的个数
   * 空间复杂度: O(h), h为BST的高度
   */
  if (!root) return;
  let last = new TreeNode(-Infinity);
  let err1 = null,
    err2 = null;

  const inorder = root => {
    root.left && inorder(root.left);

    if (root.val > last.val) {
      last = root;
    } else {
      if (!err1) {
        /**
         * 记录第一对出现错误的点
         *   因为可能只有一对错误
         *   所以root节点也要记录
         */
        err1 = last;
        err2 = root;
      } else {
        /**
         * 进入这里 说明出现了第二次错误
         * 此时更新err2为第二对错误的后一个
         */
        err2 = root;
      }
    }

    root.right && inorder(root.right);
  };
  inorder(root);

  if (err1 && err2) {
    [err1.val, err2.val] = [err2.val, err1.val];
  }
};
