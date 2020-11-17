from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        第一种思路
        从前往后进行归并
        思路很简单 就不写了

        复杂度分析:
            时间复杂度: O(m + n)
            空间复杂度: O(m + n)
        """
        i, j = 0, 0
        res = []
        while i < m and j < n:
            if (nums1[i] < nums2[j]):
                res.append(nums1[i])
                i += 1
            else:
                res.append(nums2[j])
                j += 1

        while i < m:
            res.append(nums1[i])
            i += 1

        while j < n:
            res.append(nums2[j])
            j += 1

        nums1[:] = res[:]
