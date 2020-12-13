/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   * 时间复杂度：由于每次递归我们的 inorder 和 preorder 的总数都会减 1，
   * 因此我们要递归 N 次，故时间复杂度为 O(N)，其中 N 为节点个数。
   * 空间复杂度：我们使用了递归，也就是借助了额外的栈空间来完成，
   * 由于栈的深度为 N，因此总的空间复杂度为 O(N)，其中 N 为节点个数。
   */
  //实际上inorder 和 postorder一定是同时为空的，因此你无论判断哪个都行
  if (preorder.length === 0) return null;

  // 创建当前节点
  const root = new TreeNode(preorder[0]);

  // 获取根节点在中序数组中的位置  同时index也就是左子树的大小
  // 比如找到inde为4 ,那么0 1 2 3位置上均为左子树, 左子树的大小即为4
  const index = inorder.indexOf(root.val);

  // 递归  前序遍历数组传左子树的节点, 也就是从1开始, 长度为index的一段数组, 即slice(1, index + 1)
  // 中序遍历数组传左子树的节点, 即从0开始 长度为index的一段数组  也就是slice(0, index)
  // 根节点无需传过去
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));

  // 前序数组传右子树的节点, 也就是从index + 1开始到数组结束 都是右子树的节点
  // 中序遍历同理
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};
