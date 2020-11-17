class Solution:
    def partitionLabels(self, S: str):
        if not S:
            return []

        # 保存当前字母出现的最远位置  第一次写的时候没想起来enumerate 用enumerate可以精简很多代码
        map = {s: index for index, s in enumerate(S)}

        res = []
        # 切割起始位置
        start = 0 
        # 存储已扫描的值中所能到达的最远位置
        scanMax = 0

        for i in range(len(S)):
            scanMax = max(scanMax, map.get(S[i]))
            if i == scanMax:
                res.append(i - start + 1)
                start = i + 1
            
        return res


        

