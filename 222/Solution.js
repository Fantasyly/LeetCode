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
var countNodes = function (root) {
  /**
   * 1. 首先找到最左下的节点 从而计算最后一层的编号范围
   * 2. 根据编号范围 使用二分法  去判断节点存不存在
   * 3. 判断一个节点是否存在是使用了位运算
   * 4. 如果一个节点的编号是12, 那么其二进制是1100, 最高位不看, 后三位为100,
   *    表示其位置是先root.right, 然后left, 再left 就是编号为12的节点所在的位置
   *    通过位运算判断该节点是否存在 其实就是利用的这个原理
   *
   *
   * 时间复杂度: O((logn)的平方)
   * 分析: 首先需要O(h)的时间复杂度找到最大层数,
   *      h为最大层数,
   *      找到之后, 要进行二分查找, 二分查找的时间复杂度为O(logN)
   *      其中N为二分查找的范围的点的个数,
   *      在这里就是第h层节点的个数, 也就是2^h,
   *      因此二分查找的时间复杂度为O(log2^h) = O(h)  我们写时间复杂度的log默认是以2为底
   *      通过二分查找每找到一个点, 都要判断这个节点是否存在
   *      每次判断都要从根节点一直往下找, 也就是每次都要O(h)去判断该节点是否存在
   *      因此总的时间复杂度为 O(h) + O(h^2) = O(h^2)
   *      而h 等于 log n , n为二叉树节点的个数
   *      因此总的时间复杂度为 O((logn)^2)
   * 空间复杂度: O(1)
   */
  if (!root) return 0;
  let p = root;
  let h = 0; // 当前在第0层
  while (p.left) {
    h++;
    p = p.left;
  }
  /**
   * 现在h表示最后一层  h+1表示所有的层数
   * 已知 第i层节点的个数 为  2^i
   *     m层的满二叉树的节点总数为 2^(m) - 1
   * 因此, p节点的编号应该是 2 ^ (h) - 1 + 1
   *      当前层最大编号应该是层数为h+1的满二叉树的最大节点数
   *      即 2^(h + 1) - 1
   */
  let low = 2 ** h,
    high = 2 ** (h + 1) - 1;
  //   let low = 1 << h,
  // high = 1 << (h + 1 ) - 1;
  while (low < high) {
    let mid = (low + high + 1) >>> 1;

    if (!nodeExist(root, h, mid)) {
      // 当前节点不存在
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return low;
};

/**
 *
 * @param {TreeNode} root 根节点
 * @param {Number} h  当前层数
 * @param {Number} node 当前节点编号
 */
function nodeExist(root, h, node) {
  /**
   * 这个函数最关键的就是理解bits的设置
   *  最好的办法就是自己举个例子试试
   */
  let bits = 2 ** (h - 1);
  while (root && bits > 0) {
    if (!(bits & node)) {
      //   为0的时候  就是向左走
      root = root.left;
    } else {
      // 其余时候 都是向右走
      root = root.right;
    }
    bits >>= 1;
  }
  return root !== null;
}
