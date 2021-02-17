/**
 * 解法3 投票算法
 * 如果当前候选人并不是真正的众数，
 * 那么其他非候选人以及真正的众数就会投反对票（count--）
 * 直到count为0时发生换届
 *
 * 如果当前候选人是真正的众数，
 * 那么真正的众数会投支持票（count++）
 * 别的人会投反对票（count--）
 * 但是因为真正的众数数量大于n/2 所以一定会胜出
 * 时间复杂度: O(N)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = nums.length;
  if (!n) return 0;

  let candidate = nums[0],
    count = 0;

  nums.forEach(value => {
    if (count === 0) {
      candidate = value;
    }

    if (value === candidate) {
      count++;
    } else {
      count--;
    }
  });

  return candidate;
};

/**
 * 解法2 排序法
 * 排序以后
 * 数组索引为Math.floor(n / 2)的值肯定是要找的结果
 * 时间复杂度:O(nlogn)
 * 空间复杂度:O(logn) 排序的空间复杂度
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = nums.length;
  if (!n) return 0;
  nums.sort((a, b) => a - b);

  return nums[(n / 2) | 0];
};
/**
 * 解法1 计数法
 * 时间复杂度:O(N)
 * 空间复杂度:O(N)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (!nums.length) return 0;

  let map = new Map();
  let n = nums.length;

  return nums.find(element => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }

    let value = map.get(element);
    if (value > Math.floor(n / 2)) {
      return true;
    }
  });
};
