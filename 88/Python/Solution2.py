from typing import List
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        """
        首先说说思路, 之前的办法是从前往后遍历, 需要额外的空间
        而从后往前是不需要额外空间的
        p1指向nums1末尾(m - 1)
        p2指向nums2末尾
        p指向nums1数组的最后的末尾
        然后进行归并

        时间复杂度: O(m + n)
        空间复杂度: O(1)
        """
        p1, p2, p = m - 1, n - 1, m + n - 1
        while p1 >= 0 and p2 >= 0:
            if nums1[p1] < nums2[p2]:
                nums1[p] = nums2[p2]
                p2 -= 1
            else :
                nums1[p] = nums1[p1]
                p1 -= 1
            p -= 1
        
        if p2 >= 0:
            nums1[:p + 1] = nums2[:p + 1]
                
