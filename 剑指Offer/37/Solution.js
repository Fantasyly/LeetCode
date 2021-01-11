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
  if (!root) return "";
  let queue = [root];
  let result = [];

  while (queue.length) {
    let len = queue.length;

    while (len) {
      const node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push("n");
      }
      len--;
    }
  }
  return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return null;
  data = JSON.parse(data);
  const root = new TreeNode(data[0]);
  const queue = [root];
  let cursor = 1;
  while (cursor < data.length) {
    const node = queue.shift();
    const leftVal = data[cursor];
    const rightVal = data[cursor + 1];
    if (leftVal !== "n") {
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
