/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 时间复杂度: O(N) N为二叉树的节点的个数
 * 空间复杂度: O(N) 主要是队列的空间开销
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  let queue = [root];
  let res = [];

  while (queue.length) {
    let len = queue.length;
    res.push(queue[queue.length - 1].val);
    while (len) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
  }
  return res;
};

/**
 * DFS实现
 * 题解看官方题解的视频或者下面的评论第一条
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const res = [];

  const dfs = (root, depth) => {
    if (!root) return;

    if (depth === res.length) {
      res.push(root.val);
    }
    dfs(root.right, depth + 1);
    dfs(root.left, depth + 1);
  };
  dfs(root, 0);
  return res;
};
