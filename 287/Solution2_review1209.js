/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  /**
   * 通过这个方法知道二分法还可以用于确定一个有范围的整数（这个思路很常见）；
   * 本题的场景和限制是极其特殊的，实际工作中和绝大多数算法问题都不会用「时间换空间」。
   * 时间复杂度：O(NlogN)，二分法的时间复杂度为O(logN)，
   * 在二分法的内部，执行了一次 for 循环，时间复杂度为 O(N)，故时间复杂度为 O(NlogN)。
   * 空间复杂度：O(1)，使用了一个 cnt 变量，因此空间复杂度为 O(1)。
   */
  const len = nums.length;
  if (len === 0) return -1;

  // 在len个数中,找到重复的, 每个数的范围都是1-(len-1)
  let left = 1,
    right = len - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;

    const count = nums.reduce((cnt, value) => {
      if (value <= mid) {
        cnt++;
      }
      return cnt;
    }, 0);

    if (count > mid) {
      right = mid;
    } else {
      // 只要确定了上面的区间 那么else里直接取反即可
      left = mid + 1;
    }
  }
  return left;
};
