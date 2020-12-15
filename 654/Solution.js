/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  /**
   * 这道题就是模板题
   * 直接递归即可
   * 套路和之前根据前序中序构建二叉树的题目一样
   * 
   * 时间复杂度: O(n2), 递归n次, 每次都要寻找最大值, 寻找的复杂度为O(logn), 因此一次递归的复杂度是O(nlogn)
   *    一共递归n次  所以总的时间复杂度是O(n2)
   *    其中n为节点的个数
   * 空间复杂度: O(n)
   */
  if (!nums.length) return null;

  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  let root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return root;
};
