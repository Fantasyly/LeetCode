class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if len(points) <= 1:
            return len(points)
        
        # 按照区间结束位置进行排序
        points.sort(key=lambda end: end[1])
        
        res = 1
        lastEnd = points[0][1]

        for curStart, curEnd in points :
            if curStart > lastEnd :
                lastEnd = curEnd
                res += 1
            
        return res
        
