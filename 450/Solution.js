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
 * @param {number} key
 * @return {TreeNode}
 */

/**
 * 二叉搜索树如何删除节点?
 * 1. 若节点为叶子节点, 直接删除
 * 2. 若节点为非叶子且有右孩子, 则用其中序遍历的下一个节点(successor节点)代替当前节点,
 *    同时去递归删除successor节点
 * 3. 若节点为非叶子且无右孩子但是有左孩子节点,
 *    则用其中序遍历的前一个节点(predecessor节点)代替当前节点,
 *    同时去递归删除predecessor节点
 *
 * 时间复杂度: O(logn)
 * 空间复杂度: O(H), H是树的高度
 */

// 找到当前节点在中序遍历顺序中的下一个节点, 即后继节点
function findSuccessor(root) {
  /**
   * 其中序遍历的下一个节点应该是其右子树上的最左下的节点
   * 查找方式是:
   *  首先找到当前节点的右孩子, root = root.right
   *  然后循环去找左孩子
   */
  root = root.right;
  while (root.left) {
    root = root.left;
  }
  return root;
}

function findPredecessor(root) {
  /**
   * 其中序遍历的前一个节点应该是其左子树上的最右下的节点
   */
  root = root.left;
  while (root.right) {
    root = root.right;
  }
  return root;
}
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key > root.val) {
    // 如果key值大于当前节点的值 则去右子树寻找
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    // 如果key值小于当前节点的值 则去左子树寻找
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !root.right) {
      // 如果是叶子节点 直接删除
      root = null;
    } else if (root.right) {
      // 如果是非叶子 且有右孩子

      // 找到后继节点
      let sucessor = findSuccessor(root);
      // 替换当前节点的值
      root.val = sucessor.val;
      // 删除后继节点
      root.right = deleteNode(root.right, sucessor.val);
    } else {
      // 如果是非叶子 且有左孩子

      // 找到前驱节点
      let predecessor = findPredecessor(root);
      // 替换当前节点
      root.val = predecessor.val;
      // 递归删除前驱节点
      root.left = deleteNode(root.left, predecessor.val);
    }
  }
  return root;
};
