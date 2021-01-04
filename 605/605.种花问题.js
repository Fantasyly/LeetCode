/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 0) return false;
  if (n === 0) return true;

  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    //   学习一下这里的判断条件
    if (
      (i === 0 || flowerbed[i - 1] === 0) &&
      flowerbed[i] === 0 &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      if (count === n) {
        //   剪枝一下 如果等于n 就不需要判断了
        return true;
      }
    }
  }

  return false;
};
// @lc code=end
