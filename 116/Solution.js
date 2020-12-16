/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  /**
   * 方法1: 层序遍历
   * 时间复杂度: O(N), N为树中节点个数, 每个节点都会遍历且仅遍历1次
   * 空间复杂度: O(N), 空间开销主要是队列的空间开销
   */
  if (!root) return root;

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    let pre = null;

    while (len) {
      const node = queue.shift();
      if (node.left) {
        if (!pre) {
          pre = node.left;
        } else {
          pre.next = node.left;
          pre = pre.next;
        }
        queue.push(node.left);
      }

      if (node.right) {
        if (!pre) {
          pre = node.right;
        } else {
          pre.next = node.right;
          pre = pre.next;
        }
        queue.push(node.right);
      }
      len--;
    }
  }
  return root;
};

var connect = function (root) {
  /**
   * 方法2: 使用哑节点
   * 时间复杂度: O(N)
   * 空间复杂度: O(1)
   */

  if (!root) return root;
  let dumb = new Node();
  let p = root,
    q = dumb;
  while (p) {
    while (p) {
      if (p.left) {
        q.next = p.left;
        q = q.next;
      }
      if (p.right) {
        q.next = p.right;
        q = q.next;
      }
      p = p.next;
    }
    p = dumb.next;
    dumb.next = null;
    q = dumb;
  }
  return root;
};
