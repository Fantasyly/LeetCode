/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 外部递归
 * 目的: 找到从任意节点开始, 路径和为sum的所有路径
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 *
 * 总的时间复杂度应该是O(N^2) 其中N为树中的节点的个数
 */
var pathSum = function (root, sum) {
  /**
   * 内部递归
   * 目的: 找到从一个节点开始, 路径和为sum的所有路径
   * @param {TreeNode} root
   * @param {Number} sum
   */
  const dfs = (root, sum) => {
    if (!root) return 0;
    sum -= root.val;

    /**
     * 下面这种写法不对
     * 会遗漏一种情况
     * 比如说如下的树 sum为-1
     *          1
     *         /
     *       -2
     *       /
     *      -1
     *     /
     *    1
     * 在下面的代码种 当从1开始遍历, 遍历到-2时 就会直接return 1了
     * 但是实际上还有一条路径 也就是[1, -2, -1, 1]这条路径
     * 因此 return的时候要判断
     *  如果当前满足要求 加1  然后去dfs左孩子和右孩子
     *  否则  加0  然后去dfs左孩子和右孩子
     *
     *     if (sum === 0) {
     *        return 1;
     *     }
     *    return dfs(root.left, sum) + dfs(root.right, sum);
     */

    return (sum === 0 ? 1 : 0) + dfs(root.left, sum) + dfs(root.right, sum);
  };

  if (!root) return 0;
  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
