var maxProfit = function (prices) {
  if (prices.length <= 0) return 0;
  let profit = 0,
    i = 1,
    len = prices.length;

  while (i < len) {
    while (i < len && prices[i - 1] <= prices[i]) {
      i++;
    }
    const buy = prices[i - 1];
    while (i < len && prices[i - 1] >= prices[i]) {
      i++;
    }
    const sale = prices[i - 1];
    profit += sale - buy;
  }
  return profit;
};
