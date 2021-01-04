class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        size = len(intervals)
        if size <= 1:
            return 0

        intervals.sort(key=lambda x: x[1])
        res, lastEnd = 0, intervals[0][1]

        for i in range(1, size):
            curStart, curEnd = intervals[i][0], intervals[i][1]
            if curStart < lastEnd:
                res += 1
            else:
                lastEnd = curEnd

        return res
