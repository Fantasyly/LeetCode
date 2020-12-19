/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  /**
   * 学会用完全二叉树的编号方法
   * 时间复杂度: O(n) n为树中节点的个数
   * 空间复杂度: O(n) 队列的空间消耗
   */
  if (!root) return 0;

  const queue = [[root, 1]];
  let res = 0,
    curLevel = 0,
    level = 0,
    left = 1;
  while (queue.length) {
    let len = queue.length;

    /**
     * 进行剪枝
     * 当一层只有一个节点时
     * 进行剪枝
     * 重置pos为1
     * 因为有些用例的树特别深
     * 会导致pos溢出
     * js里也没有long long这种东西
     * 因此只能剪枝
     */
    if (len === 1) {
      queue[0][1] = 1;
    }
    while (len) {
      const [node, pos] = queue.shift();
      node.left && queue.push([node.left, 2 * pos]);
      node.right && queue.push([node.right, 2 * pos + 1]);
      if (curLevel !== level) {
        curLevel = level;
        left = pos;
      }
      res = Math.max(res, pos - left + 1);
      len--;
    }
    level++;
  }

  return res;
};
