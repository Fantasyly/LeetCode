class Solution:
    def maxProfit(self, prices):
        if len(prices) <= 1:
            return 0

        profit = 0
        for i in range(1, len(prices)) :
            if prices[i] - prices[i - 1] > 0 :
                profit += prices[i] - prices[i - 1]
            
        return profit
