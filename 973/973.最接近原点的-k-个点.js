/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  if (points.length === 0 || K == 0) return [];

  const distance = index => {
    return points[index][0] ** 2 + points[index][1] ** 2;
  };

  const quickSortK = (left, right, K) => {
    if (left > right) return;
    // 基准值选择最左边的
    const pivot = distance(left);

    // 定义left和right的游标
    let l = left,
      r = right;

    // 基准在左边 那就从右边开始动
    while (l < r) {
      // 从右边开始寻找到值小于基准值的位置
      while (distance(r) > pivot && l < r) {
        r--;
      }

      // 从左边开始寻找值大于基准值的位置
      while (distance(l) <= pivot && l < r) {
        l++;
      }

      if (l < r) {
        // 交换
        [points[l], points[r]] = [points[r], points[l]];
      }
    }

    // l 和 r 重合的位置就是基准应该在的位置 l == r
    [points[left], points[r]] = [points[r], points[left]];

    // 判断是否有K个了
    const count = l - left + 1;
    if (count === K) {
      return;
    } else if (count > K) {
      quickSortK(left, l - 1, K);
    } else {
      quickSortK(l + 1, right, K - count);
    }
  };

  quickSortK(0, points.length - 1, K);
  //quickSortK(0, points.length - 1, K);
  return points.slice(0, K);
};
// @lc code=end
