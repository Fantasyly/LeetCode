/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  /**
   * 这道题依然可以套模板
   * 前序遍历+二叉搜索树的性质
   * 可以轻松找到分割点  使得分割点左侧是左子树 右侧是右子树
   * 从而递归
   *
   * 时间复杂度: 每次查找index的复杂度是O(n), 一共递归n次 (每次递归的时候 节点数比上次少一个 因此n个节点要递归n次)
   *            所以我觉得时间复杂度是O(n2)
   * 空间复杂度: O(n) 递归栈的开销
   */
  if (!preorder.length) return null;

  const root = new TreeNode(preorder[0]);
  //   注意index的初始值
  let index = preorder.length;
  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] > preorder[0]) {
      index = i;
      break;
    }
  }

  root.left = bstFromPreorder(preorder.slice(1, index));
  root.right = bstFromPreorder(preorder.slice(index + 1));
  return root;
};

var bstFromPreorder = function (preorder) {
  /**
   * 方法2: 先排序数组 使其变成中序  这样就有中序和前序了
   * 时间复杂度: 排序的时间复杂度O(nlogn), 递归的时间复杂度是O(n)
   *    因此总的时间复杂度是O(nlogn)
   * 空间复杂度: O(n)
   */
  let inorder = [...preorder].sort((a, b) => a - b);

  const construct = (preorder, inorder) => {
    if (!preorder.length) return null;

    const root = new TreeNode(preorder.shift());
    const index = inorder.indexOf(root.val);

    root.left = construct(preorder.slice(0, index), inorder.slice(0, index));
    root.right = construct(preorder.slice(index), inorder.slice(index + 1));
    return root;
  };
  return construct(preorder, inorder);
};
