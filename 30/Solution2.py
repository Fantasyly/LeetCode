from typing import List


class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        from collections import Counter
        """
        优化: 当words中没有w时,直接移动left到当前位置过来
            因为子串必须是连续的,所以前面的计数全部就没用了
        """

        if not s or not words:
            return []
        size = len(s)
        wordsLen = len(words)
        if size < wordsLen:
            return []
        oneWord = len(words[0])
        wordsMap = Counter(words)
        res = []

        for i in range(oneWord):
            left = i
            curLeft = left
            right = left + oneWord
            window = Counter()
            count = 0
            while right <= size:
                w = s[curLeft:right]
                if w not in words:
                    left = right
                    curLeft = left
                    right += oneWord
                    count = 0
                    window.clear()
                else:
                    window[w] += 1
                    curLeft += oneWord
                    right += oneWord
                    count += 1
                    while window[w] > wordsMap[w]:
                        lw = s[left:left + oneWord]
                        window[lw] -= 1
                        left += oneWord
                        count -= 1
                    if count == wordsLen:
                        res.append(left)

        return res
