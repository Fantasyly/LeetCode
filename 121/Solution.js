/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 思路看官方题解
   * 我一开始老是想着用有限状态机来解决
   * 但是有限状态机有些麻烦
   *
   * 这道题就是我每一天都想着 如果我是在历史最低价买进来的
   * 那么今天卖了能挣多少钱
   *
   * 时间复杂度: O(n)
   * 空间复杂度: O(1)
   */
  if (!prices.length) return 0;
  let minPrice = Infinity,
    maxProfit = 0;

  prices.forEach(price => {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  });
  return maxProfit;
};
