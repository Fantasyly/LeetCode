class Solution:
    def maxProfit(self, prices):
        if len(prices) <= 1:
            return 0

        profit = 0
        size = len(prices)
        i = 1
        while i < size :
            while i < size and prices[i - 1] >= prices[i]:
                i += 1
            
            # i-1处即为波谷
            buy = prices[i - 1]
            while i < size and prices[i - 1] <= prices[i]:
                i += 1

            # i-1处即为波峰
            sale = prices[i - 1]
            profit += sale - buy

        return profit
