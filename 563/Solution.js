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
var findTilt = function (root) {
  /**
   * 这道题无需双递归
   *  这里是为了深化一下记忆
   * (其实是我一开始就有了双递归的思维定势, 才写出了双递归的解法,效率差的一笔)
   * 时间复杂度: O(n^2) n为树中节点的个数
   */

  // 内层递归: 计算一个子树的节点和
  const dfs = root => {
    if (!root) return 0;
    return root.val + dfs(root.left) + dfs(root.right);
  };

  if (!root) return 0;
  let left = dfs(root.left);
  let right = dfs(root.right);
  let tilt = Math.abs(left - right);
  return tilt + findTilt(root.left) + findTilt(root.right);
};

/**
 *
 * @param {TreeNode} root
 * 单递归解决
 *  dfs的作用是计算左子树和右子树的节点和
 *  同时在计算的同时, 计算坡度并存储到外部变量中
 *  最后返回外部变量
 */
var findTilt = function (root) {
  if (!root) return 0;
  let tilt = 0;
  const dfs = root => {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    tilt += Math.abs(left - right);

    return left + right + root.val;
  };
  dfs(root);
  return tilt;
};
