from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if not nums:
            return

        """
        首先说一下思路, 这道题并不难
        双指针 left 和 right
        right出去寻找不为0的数 并将其与left对应的值交换

        初始left和right均为0
        若第一个是0  比如 0 1 2 
            那么right就会找到1  随后0和1交换 left++ right++
        若第一个是非0数 比如 1 0 2
            那么right找到的第一个非零数就是自己  自然不会影响结果 然后left和right分别后移
        
        left左边都是按照原来相对顺序排列的非零数
        left-right中间都是0

        时间复杂度: O(n) 只需要一次遍历数组
        空间复杂度: O(1)
        """

        size = len(nums)
        left, right = 0, 0
        while right < size:
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
            right += 1
