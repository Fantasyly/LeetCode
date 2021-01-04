/**
 * 使用原地快排进行递减排序
 * 时间复杂度: O(n) 如果选择第一个值作为基准 极端情况下会退化到O(n2)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (!nums.length || k > nums.length) return 0;

  // 递减排序
  const quickSelect = (nums, k) => {
    if (!nums.length) return;
    let left = 0,
      right = nums.length - 1;

    // 生成一个随机数  用第一个值与该值作为交换 然后基准还是第一个值
    let index = Math.floor(Math.random() * (right - left + 1));
    [nums[0], nums[index]] = [nums[index], nums[0]];
    let pivot = nums[0];

    while (left < right) {
      // 因为是递减排序 因此条件是nums[right] < pivot
      while (left < right && nums[right] < pivot) {
        right--;
      }

      while (left < right && nums[left] >= pivot) {
        left++;
      }
      if (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }

    // 讲基准值放入该放入的位置
    [nums[left], nums[0]] = [nums[0], nums[left]];

    // 计算当前满足要求的数是第几个
    const count = left + 1;
    if (count < k) {
      // 如果count小于k 那么说明还差k-count个, 去右边数组找第k-count个就是要求的值
      return quickSelect(nums.slice(left + 1), k - count);
    } else if (count > k) {
      // 如果count大于k 那么左边是多的  继续去左边找第k个
      return quickSelect(nums.slice(0, left), k);
    } else {
      return pivot;
    }
  };
  return quickSelect(nums, k);
};

/**
 *
 * 使用非原地快排
 * 下面的代码会导致栈溢出
 * 还是只记住上面的原地快排就好了
 *
 */
var findKthLargest = function (nums, k) {
  if (!nums.length || k > nums.length) return -1;

  const quickSelect = (nums, k) => {
    if (nums.length === 1) return nums;

    // 选择基准值
    let pivot = nums[0];

    let left = [],
      right = [];
    for (let i = 1; i < nums.length; i++) {
      nums[i] > pivot && left.push(nums[i]);
      nums[i] <= pivot && right.push(nums[i]);
    }
    if (left.length === k - 1) {
      return [...left, pivot, ...right];
    } else if (left.length < k - 1) {
      return [...left, pivot, ...quickSelect(rifght, k - left.length - 1)];
    } else {
      return [...quickSelect(left, k), pivot, ...right];
    }
  };
  return quickSelect(nums, k)[k - 1];
};
