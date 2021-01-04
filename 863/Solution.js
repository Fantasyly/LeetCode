/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  /**
   * 递归版本 注意!!!, 这个递归的模板是上面的第一个DFS模板
   *  1. 首先给所有节点添加一个parent属性, 指向其父节点
   *  2. 这样这棵树的每个节点都可以双向寻找
   *  3. 然后使用DFS进行搜索即可
   * 
   * 时间复杂度: O(N), 其中N是二叉树中节点的个数
   * 空间复杂度：O(N)
   */
  if (!root) return [];

  // 通过层序遍历 给每个节点添加上parent属性
  root = bfs(root);
  const res = [];

  const dfs = (root, dist) => {
    //   如果dist为K的话  压入结果数组
    if (dist === K) {
      res.push(root.val);
      return;
    }

    // 当前节点添加一个已经被访问的属性
    root.visited = true;

    // 在当前节点所能到达的节点中, 选择存在且没有被访问过的进行深搜
    [root.left, root.right, root.parent].forEach(node => {
      if (!node.visited) {
        dfs(node, dist + 1);
      }
    });
  };
  return res;
};
function bfs(root) {
  if (!root) return;

  const queue = [[root, null]];

  while (queue.length) {
    let len = queue.length;
    while (len) {
      let [node, parent] = queue.shift();
      node.parent = parent;

      node.left && queue.push([node.left, node]);
      node.right && queue.push([node.right, node]);
      len--;
    }
  }
  return root;
}

var distanceK2 = function (root, target, K) {
  /**
   * 迭代版本
   */
  if (!root) return [];

  // 通过层序遍历 添加父节点属性
  root = bfs(root);

  let res = [];

  // 记录已经遍历过的节点
  let visited = [target];

  // 队列里存储一下距离和节点
  const queue = [[target, 0]];

  while (queue.length) {
    // 拿到当前节点
    const [node, dist] = queue.pop();

    // 将其标记为已遍历
    visited.push(node);

    // 如果距离等于K的话 满足条件 添加到res中
    if (dist === K) {
      res.push(node.val);
    }

    // 当前节点可到达的节点 添加至队列
    [node.left, node.right, node.parent].forEach(n => {
      if (n && visited.indexOf(n) === -1) {
        queue.push([n, dist + 1]);
      }
    });
  }
  return res;
};
