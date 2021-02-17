/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 层序遍历的时候对二叉树的节点进行编号
 * 每次判断是否和前一个编号差1
 * 除了判断是否和前一个编号差1以外
 * 还可以计算节点个数，最后判断最后一个节点的编号是否等于节点的个数
 * 时间复杂度:O(N)
 * 空间复杂度:O(N)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  if (!root) return true;

  let queue = [[root, 1]];
  let last = 0;

  while (queue.length) {
    let len = queue.length;

    while (len) {
      let [node, number] = queue.shift();
      if (number - last !== 1) {
        return false;
      }
      last = number;
      node.left && queue.push([node.left, number * 2]);
      node.right && queue.push([node.right, number * 2 + 1]);
      len--;
    }
  }
  return true;
};

var isCompleteTree = function (root) {
  if (!root) return true;

  let queue = [[root, 1]];
  let count = 0;
  let code = 0;

  while (queue.length) {
    let len = queue.length;
    count += len;
    while (len) {
      let [node, number] = queue.shift();
      code = number;
      node.left && queue.push([node.left, number * 2]);
      node.right && queue.push([node.right, number * 2 + 1]);
      len--;
    }
  }
  return code === number;
};
