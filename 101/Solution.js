/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归解决
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const dfs = (p, q) => {
    if (!p && !q) return true;

    if (!p || !q) return false;

    return p.val === q.val && dfs(p.left, q.right) && dfs(p.right, q.left);
  };
  return dfs(root, root);
};

/**
 * 迭代解决
 * 时间复杂度:O(n)
 * 空间复杂度:O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  let queue = [root, root];

  while (queue.length) {
    let p = queue.shift(),
      q = queue.shift();
    if ((!p && q) || (!q && p)) return false;
    if (p && q && p.val !== q.val) return false;

    p && q && queue.push(p.left, q.right, p.right, q.left);
  }
  return true;
};
