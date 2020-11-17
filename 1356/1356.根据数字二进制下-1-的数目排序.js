/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  if (arr.length <= 1) return arr;

  const countBit = num => {
    let count = 0;
    const strNum = num.toString(2);
    for (let i = 0; i < strNum.length; i++) {
      if (strNum[i] === "1") count++;
    }

    return count;
  };

  arr.sort((a, b) => {
    return countBit(a) - countBit(b) || a - b;
  });

  return arr;
};
// @lc code=end
