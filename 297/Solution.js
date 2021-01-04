/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  /**
   * 层序遍历将其序列化  注意不要写null了 不便于反序列化  直接用n代替
   */
  if (!root) return "";

  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (node) {
        res.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        res.push("n");
      }
      len--;
    }
  }
  return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *s
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return null;

  // 进行解析 得到数组
  data = JSON.parse(data);
  let queue = [];
  let root = new TreeNode(data[0]);
  queue.push(root);
  let cursor = 1;
  while (cursor < data.length) {
    const node = queue.shift();
    const leftVal = data[cursor];
    const rightVal = data[cursor + 1];
    if (leftVal !== "n") {
      console.log(leftVal);
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }

    if (rightVal !== "n") {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
    cursor += 2;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
