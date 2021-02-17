/**
 * 使用标记法
 * 每遍历一个元素
 * 那就去找到它应该出现的位置
 * 也就是nums[i] - 1这个位置
 * 将这个位置上的元素乘上-1  表示这个位置已经有元素了
 * 如果再遍历到要放到这个位置的元素 说明重复了
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let n = nums.length;
  if (n === 0) return [];
  let res = [];

  nums.forEach(value => {
    if (nums[value - 1] < 0) {
      res.add(value);
    } else {
      nums[value - 1] *= -1;
    }
  });
  return res;
};
/**
 * 参照41题的题解写的
 * 时间复杂度:O(N)
 * 空间复杂度:O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let n = nums.length;
  if (n === 0) return [];

  for (let i = 0; i < n; i++) {
    while (nums[nums[i] - 1] !== nums[i]) {
      let index = nums[i] - 1;
      //[nums[index], nums[i]] = [nums[i], nums[index]];
      swap(nums, i, index);
    }
  }

  let res = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      res.push(nums[i]);
    }
  }
  return res;
};

/**
 * 为了不使用额外的空间消耗
 * 因此不能使用解构赋值来交换两个数了
 * 解构赋值右侧会出现一个数组
 * 因此这里记2种不使用额外空间进行交换两个数的办法
 *
 * 方法1
 * a = a + b
 * b = a - b
 * a = a - b
 *
 * 方法2
 * a = a ^ b
 * b = a ^ b
 * a = a ^ b
 *
 * 左边都是aba
 * 注意
 * 如果使用异或的话，
 * 调用 swap(nums, i, i)，
 * 那么最终的结果会变为 0 这是因为，如果是在数组中，
 * 自己和自己交换，只有 1 个空间，
 * 这个数会在异或运算的过程中变为 0，因此单独判断一下就好了。
 *
 * 对于加减法实现的交换方法，有可能发生溢出。
 */

function swap(nums, index1, index2) {
  if (index1 === index2) return;
  nums[index1] = nums[index1] ^ nums[index2];
  nums[index2] = nums[index1] ^ nums[index2];
  nums[index1] = nums[index1] ^ nums[index2];
}
