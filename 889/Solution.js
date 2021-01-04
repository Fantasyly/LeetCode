/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  if (pre.length === 0) return null;

  // 前序的第一个数肯定是根
  const root = new TreeNode(pre.shift());

  // 后序的倒数第二个肯定是右子树的根(如果存在的话)
  // 那么假设a为后序倒数第二个, 也就是右子树的根
  // 那么前序从索引1的位置到 a出现的位置(不包含a),就是左子树的节点
  const index = pre.indexOf(post[post.length - 2]);

  // 为了简化操作,  把后序的最后一个弹出 也就是根节点
  post.pop();
  root.left = constructFromPrePost(pre.slice(0, index), post.slice(0, index));
  root.right = constructFromPrePost(pre.slice(index), post.slice(index));
  return root;
};