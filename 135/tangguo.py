class Solution:     
    def candy(self, ratings: List[int]) -> int:
        size = len(ratings)
        if size <= 1:
            return size
        
        candies = [1 for _ in range(size)]

        for i in range(1, size):
            if ratings[i] > ratings[i - 1]:
                candies[i] = candies[i - 1] + 1
            
        for i in range(size - 2, -1, 0):
            if ratings[i] > ratings[i + 1]:
                candies[i] = max(candies[i + 1] + 1, candies[i])
        
        return sum(candies)