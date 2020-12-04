/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    /**
     * 用这种思路可以把153和154两道题结合到一块去记
     * 
     * 因为nums中无重复值,
     * 考查区间最右端的值,即nums[right]
     * 那么在nums中,在转折点左侧必定都是大于nums[right]的,
     * 在转折点右侧必定都是小于nums[right]的
     * 那么就可以找到转折点,也即最小值
     * 
     * 当nums[mid] > nums[right]时,
     *  最小值肯定在右边 因此 left= mid + 1
     * 当 nums[mid] <= nums[right]时,
     *  最小值可能是当前值,也可能是更左边的值,因此right=mid
     */
  let len = nums.length;
  if (len === 1) return nums[0];
  let left = 0,
    right = len - 1;

  //   数组没有旋转
  if (nums[0] < nums[len - 1]) {
    return nums[0];
  }

  while (left < right) {
    let mid = (left + right) >>> 1;

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
