/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 时间复杂度: O(n) n为二叉树中节点的个数
 * 空间复杂度: O(n) 主要是队列, 结果数组, 以及每层的数组的空间开销
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let flag = true;
  let res = [];

  while (queue.length) {
    let len = queue.length;
    let levelRes = [];
    while (len) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      if (flag) {
        // flag为true 表示当前层是自左向右遍历的
        levelRes.push(node.val);
      } else {
        // flag为false 表示当前层是自右向左遍历的
        levelRes.unshift(node.val);
      }
      len--;
    }
    res.push(levelRes);
    flag = !flag;
  }
  return res;
};

/**
 * 优化前的代码:
 * 最开始做的时候没想到JS数组的unshift方法
 * 而是直接用了栈
 * 这样的话空间复杂度会比较大
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root],
    res = [],
    stack = [];
  let flag = true;
  while (queue.length) {
    let len = queue.length;
    let levelRes = [];
    while (len) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      if (flag) {
        // flag为true 表示下一层应该是自右向左遍历的
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);

        // 同时也表示当前层是自左向右遍历的
        levelRes.push(node.val);
      } else {
        // flag为false, 表示当前层自右向左遍历
        levelRes.push(stack.pop().val);
      }
      len--;
    }
    flag = !flag;
    res.push([...levelRes]);
  }
  return res;
};
