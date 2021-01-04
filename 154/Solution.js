/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  /**
   * (不推荐)
   * 比较左值的思路:
   *  要找的最小值出现的位置依然是出现转折的地方
   *  也就是mid - 1 > mid的地方
   *
   *  这道题的难点是有重复值
   *  就比如如下情况
   *  2 2 2 1 2 2 2 2 2 2
   *  left = 0, right = 10, mid = 5, nums[mid] = 2
   *  此时你无法判断2是在变化点的右侧区间还是左侧区间
   *
   *  因此这里采取的办法是:
   *  当nums[mid] > nums[0]时,
   *    left = mid + 1;//收缩左区间
   *  当nums[mid] < nums[0]时,
   *    right = mid - 1;// 收缩右区间
   *  当nums[mid] == nums[0]时, left++
   *
   *
   *  但是这样写还是有个问题, 那就是下面这个用例无法通过
   * [10, 1, 10, 10, 10]
   *  原因:
   *    left = 0, right = 5, mid = 2
   *    => left++
   *    left = 1, right = 5 , mid = 3
   *    => left++
   *    left = 2, right = 5, 注意此时,left已经越过了最小值
   *    因此每次循环的时候要判断,如果出现nums[left - 1] > nums[left]的情况,
   *    就直接把nums[left]返回即可
   */
  let len = nums.length;
  if (len === 1) return nums[0];

  // 数组没有旋转
  if (nums[0] < nums[len - 1]) {
    return nums[0];
  }

  let left = 0,
    right = len - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;

    if (left > 0 && nums[left] < nums[left - 1]) {
      return nums[left];
    }

    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else if (nums[mid] < nums[left]) {
      right = mid;
    } else {
      left++;
    }
  }
  return nums[left];
};
