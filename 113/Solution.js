/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
/**
 * 本题与剑指Offer34题相同
 */
var pathSum = function (root, sum) {
  /**
   * DFS模板题
   *
   * 时间复杂度：O(N^2)
   * 其中 N是树的节点数。在最坏情况下，树的上半部分为链状，下半部分为完全二叉树，并且从根节点到每一个叶子节点的路径都符合题目要求。
   * 此时，路径的数目为 O(N)，并且每一条路径的节点个数也为 O(N)，因此要将这些路径全部添加进答案中，时间复杂度为 O(N^2)
   * 空间复杂度：O(N)，其中 N 是树的节点数。空间复杂度主要取决于栈空间的开销，栈中的元素个数不会超过树的节点数。
   */
  let result = [];

  const dfs = (root, path) => {
    if (!root) return;

    // 注意 这道题这里是push值就可以了
    path.push(root.val);

    // 逻辑写这里
    if (!root.left && !root.right) {
      // 计算路径和
      const s = path.reduce((accumulator, value) => {
        accumulator += value;
        return accumulator;
      }, 0);
      if (s === sum) {
        result.push([...path]);
      }
    }

    dfs(root.left, path);
    dfs(root.right, path);
    path.pop();
  };
  dfs(root, []);
  return result;
};
