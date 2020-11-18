from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if not gas or not cost or len(gas) != len(cost):
            return -1

        """
        首先说一下思路 :
        结论1: 如果gas的所有汽油数量加起来 小于 所有花费的, 那么肯定是无法到达的,直接返回-1
            也就是sum(gas) < sum(cost)  return -1
        结论2: 如果从a加油站出发, 经过b和c, 但是发现到不了d加油站
            那么不仅能说明从a出发不可抵达d,
            也可说明从b或者c出发均无法到达d
            原因见上面引用的那篇题解
        此外, 如果sum(gas) >= sum(cost), 那么一定会找到一个解(证明看题解)
        有了上面这2条结论 我们就可以从i=0开始遍历数组 一直遍历到数组的最后一项
        如果从0到len-2都无法完成一圈, 那么len -1 作为起点是肯定可以的
        因为一定会有一个解

        复杂度分析: 
            时间复杂度: O(n) 只对数组进行了一次遍历
            空间复杂度: O(1)
        """

        if sum(gas) < sum(cost):
            return -1

        # 油箱初始为空 start开始为0
        gasBox, start = 0, 0
        for i in range(len(gas)):
            gasBox += gas[i] - cost[i]
            if (gasBox < 0):
                gasBox, start = 0, i + 1

        return start
