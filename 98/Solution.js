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
 * @return {boolean}
 */
var isValidBST = function (root) {
  /**
   * 时间复杂度: O(n), n为二叉树的节点的个数,
   * 空间复杂度: O(n)
   */
  if (!root) return true;
  let last = -Infinity;
  let flag = true;

  /**
   * 递归中序
   * @param {TreeNode} root
   */
  const inorder = root => {
    root.left && inorder(root.left);
    if (root.val > last) {
      last = root.val;
    } else {
      flag = false;
    }
    root.right && inorder(root.right);
  };
  inorder(root);
  return flag;
};

var isValidBST = function (root) {
  if (!root) return true;
  let last = -Infinity;

  /**
   * 迭代中序
   * @param {TreeNode} root
   */
  const inorder2 = root => {
    const WHITE = "white",
      GRAY = "gray";
    const stack = [];

    stack.push([root, WHITE]);

    while (stack.length) {
      const [node, color] = stack.pop();

      if (color === WHITE) {
        node.right && stack.push([node.right, WHITE]);
        stack.push([node, GRAY]);
        node.left && stack.push([node.left, WHITE]);
      } else {
        if (node.val > last) {
          last = node.val;
        } else {
          return false;
        }
      }
    }
    return true;
  };

  return inorder2(root);
};
