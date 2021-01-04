class Solution:
    def checkPossibility(self, nums):
        if not nums:
            return False

        count = 0
        size = len(nums)
        for i in range(size - 1):
            if nums[i] > nums[i + 1]:
                count += 1
                if i - 1 >= 0 and nums[i - 1] > nums[i + 1] and i + 2 <= size - 1 and nums[i] > nums[i + 2]:
                    return False
            if count == 2:
                return False
        return True
