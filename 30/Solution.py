from typing import List


class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        from collections import Counter
        """
        首先说一下思路: 
        首先我们能得到一个单词的长度oneWord
        我们定义一个滑动窗口 left和right分别表示窗口的左右边界
        然后right去扩张 
        循环开始(循环oneWord次)(这里为什么只循环oneword次,见代码处的注释)
        更新left为i
        更新right为i + oneword
        更新curleft为left
        更新count为0
            每拿到一个单词w  w = s[curLeft:right]
                首先window[w]+1
                curLeft向右移动一个单词的长度
                right向右移动一个单词的长度
                count+1
                然后就去判断window中该单词出现的次数是否大于words中该单词出现的次数
                    如果大于,那就说明在窗口中,w出现的次数多了.那就得把多的删掉
                    因此,窗口需要收缩,left需要右移,
                    截取left到left + oneword的单词  
                    窗口中该单词的频次-1
                    一直收缩  直到窗口中w的出现次数不在大于words中w出现的次数
                    每收缩一次 count-1
                接着判断count是否等于words.length
                若是相等,说明找到了正确的起点,把left添加到res中
            进行下一次循环
        循环结束
        """
        if not s or not words:
            return []

        size = len(s)
        wordsLen = len(words)
        if size < wordsLen: return []
        oneWord = len(words[0])
        # 统计words每个单词出现的次数 
        wordsMap = Counter(words)
        res = []

        for i in range(oneWord):
            """
            为什么只循环oneWord次?
                假设oneword为4
                因为最开始left为0的话, 那么在right扩张的过程中,肯定会伴随着left的收缩
                而收缩的话,left就会变为left+oneword,即4
                当left为1的话,那么收缩的时候就会经历到5,
                -------2-------------------------6
                因此left的初始值只需要从0,1,2,3即可,也就是只循环oneWord次
            """
            left = i
            curLeft = left
            right = left + oneWord
            window = Counter()
            count = 0
            while right <= size:
                w = s[curLeft:right]
                window[w] += 1
                curLeft += oneWord
                right += oneWord
                count += 1
                """
                Python中如果是window[w],而window中没有w这个key的话 返回值是0
                        如果是window.get(w) ,window中没有w这个key的话就会报错
                """
                while window[w] > wordsMap[w]:
                    lw = s[left:left + oneWord]
                    window[lw] -= 1
                    left += oneWord
                    count -= 1
                if count == wordsLen:
                    res.append(left)

        return res
