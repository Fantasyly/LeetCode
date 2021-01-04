class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if not nums:
            return
        size = len(nums)
        i = size - 2

        # 找到nums[i]
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1

        # 如果本身就是降序 直接对其升序排序 并终止代码运行
        if i < 0:
            nums.sort()
            return
        
        # 找到后面序列中第一个大于nums[i]的
        j = size - 1
        while j > i and nums[j] <= nums[i]:
            j -= 1
        
        # 交换
        nums[i], nums[j] = nums[j], nums[i]

        # 后半段序列升序排序
        left = i + 1
        right = size - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
        
        
        
