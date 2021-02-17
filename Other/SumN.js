/**
 * n数之和
 * 在一个数组中 找到所有的n个数
 * 这n数之和为给定的target值
 */

function nSum(nums, n, target) {
  let len = nums.length;
  if (len < n) return [];

  /**
   * 注意 1 << 31 为-2147483648，可以使用Math.pow(2, 31)来代替
   * let bits = 1 << len;
   * bits是所有组合的个数
   */
  let bits = Math.pow(2, len);

  let res = [];

  /**
   * i的范围是0到bits
   * 也就是全0到全1
   */
  for (let i = 0; i <= bits; i++) {
    /**
     * 计算当前的i
     * 转换成二进制后
     * 包含1的个数
     * 如果1的个数等于n的话
     * 说明找到了n个数
     * 然后去判断这n数之和是否为目标值
     */
    if (countOne(i) === n) {
      /**
       * 如果当前正好是n个数
       * 就要去计算n数之和
       * 问题又变成了怎么确定这n个数
       * 比如说 nums = [1,2,3,4]，n为2
       * 此时的i为6  也就是0110
       * 就要去判断nums[1]+nums[2]是否为target
       *
       * 实际上我们是判断某一个索引处是否被选中了
       * 也就是判断该索引处是否为1
       * 比如说我们要判断索引为0的位置是否被选中
       * 那么直接 1000 & 0110 = 0000 没选中
       * 第1位
       * 0100 & 0110 = 0100 > 0 选中了nums[1]
       * 其他以此类推
       */
      let sum = 0;
      let temp = [];

      // 数组长度为4的话 就是0 1 2 3  对应的也就是8 4 2 1
      for (let j = 0; j < len; j++) {
        if ((Math.pow(2, j) & i) > 0) {
          /**
           * j为0时， 2的0次方为1
           * 也就是 0001 & 0110
           * 实际上判断的是最后一位
           * 因此对应的索引是len - 1 - j
           */
          sum += nums[len - 1 - j];
          temp.push(nums[len - 1 - j]);
        }
      }

      if (sum === target) {
        res.push(temp);
      }
    }
  }
  return res;
}

/**
 * 计算一个二进制数中包含的1的个数
 * @param {Number} i
 */
function countOne(i) {
  let count = 0;
  /**
   * 具体实现有2种方法
   * 第一种方法是
   * 用i与1进行&运算，判断末尾是否为1
   * 如果i&1 === 1  说明最后一个末尾数为1 count++
   * 如果等于0， 说明最后一个末尾数为0
   * 然后判断完 i向右移1位  把最后一位判断过的去除掉
   * i >> 1
   */
  while (i) {
    if (i & (1 === 1)) {
      count++;
    }
    i >>= 1;
  }

  /**
   * 第二种方法是
   * 用i与i-1进行&运算
   */
  //  while (i) {
  //      i &= (i - 1);
  //      count++;
  //  }
  return count;
}

/**
 * 测试运行
 */
let arr = [1, 2, 34, 2, 34, 5, 6, 7, 8, 9, 5, 43, 1];
let res = nSum(arr, 2, 6);
console.log(res);
