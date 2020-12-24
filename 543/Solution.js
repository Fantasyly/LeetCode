/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  root = bfs(root);
  let res = -Infinity;

  const dfs = (root, path) => {
    if (!root) return;
    root.visted = true;
    path.push(root);
    res = Math.max(res, path.length);
    [root.left, root.right, root.parent].forEach(node => {
      node && !node.visted && dfs(node, path);
    });
    root.visted = false;
    path.pop();
  };

  const dfs_main = root => {
    dfs(root, []);
    root.left && dfs_main(root.left);
    root.right && dfs_main(root.right);
  };
  dfs_main(root);
  return res - 1;
};

// 添加parent
function bfs(root) {
  const queue = [[root, null]];

  while (queue.length) {
    let len = queue.length;
    while (len) {
      const [node, parent] = queue.shift();
      node.parent = parent;
      node.left && queue.push([node.left, node]);
      node.right && queue.push([node.right, node]);
      len--;
    }
  }
  return root;
}
