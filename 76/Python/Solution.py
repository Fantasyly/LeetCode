from collections import defaultdict


class Solution(object):
    def minWindow(self, s, t):
        """
        首先说一下思路:
        这是一道很典型的滑动窗口的题
        要在字符串s中找到包含t的最小长度的字串
        而且t中的字符是可能重复的
        因此就必要记录下t中每个字符出现的次数
        然后定义窗口  窗口左侧为left  右侧为right
        right向右走,去扩张窗口,直到窗口包含t中的所有字符
            那么如何判断当前窗口涵盖所有t中的字符呢?
            解决办法是定义一个变量distance 
            right扩张的过程中,每碰到一个字符,如果这个字符在t中也存在,而且窗口中该字符出现的次数还不足以包含t
            则distance++
            简言之: distance表示窗口中包含的t中字符的个数   
            当distance等于t的长度的时候 说明当前窗口覆盖了t内的所有字符
        此时,就要去缩小窗口,移动left,使left向右移动
        若当前字符c属于t, 且窗口中c字符的次数等于t中c的个数 则distance--  此时窗口不满足条件,继续right去扩张
        若当前字符属于t  但窗口中c字符的次数大于t中c的个数 那就继续缩减 因为我们要找最小的子串
        直到right越界 循环结束

        复杂度分析:
            时间复杂度: O(|S| + |T|) ||表示字符串的长度
            空间复杂度: O(|S| + |T|)
        """
        slen = len(s)
        tlen = len(t)
        if not s or not t or slen < tlen:
            return ""

        # 记录窗口和t中每个字符出现的次数
        winFreq = defaultdict(int)
        tFreq = defaultdict(int)
        for c in t:
            tFreq[c] += 1

        left = right = begin = distance = 0
        minLen = slen + 1

        for right, c in enumerate(s):
            # 如果t中不包含当前字符 直接continue
            if tFreq[c] == 0:
                continue

            # 如果当前窗口中c的个数不够包含t的 distance++
            if winFreq[c] < tFreq[c]:
                distance += 1
            
            # 窗口中c的个数+1
            winFreq[c] += 1

            # 当前窗口已经能涵盖字符串t了 收缩窗口 left移动
            while distance == tlen:
                # 计算当前窗口是不是最小 如果是最小 更新begin值
                if minLen > right - left + 1:
                    minLen = right - left + 1
                    begin = left
                cl = s[left]
                if tFreq[cl] == 0:
                    left += 1
                    continue
                
                # 如果窗口中字符cl的个数刚好包含t  distance--
                if winFreq[cl] == tFreq[cl]:
                    distance -= 1
                
                # 若窗口内cl的个数大于t中字符的个数  无关紧要 直接丢弃
                winFreq[cl] -= 1
                left += 1

        if minLen > slen:
            return ""
        return s[begin:begin + minLen]
