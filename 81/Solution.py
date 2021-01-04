from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        if not nums:
            return False

        size = len(nums)
        if len == 1:
            return nums[0] == target

        left = 0
        right = size - 1

        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return True

            if nums[mid] < nums[right]:
                # mid - right这一段是有序的
                if nums[mid] < target and target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
            elif nums[mid] > nums[right]:
                # left - mid这一段是有序的
                if nums[left] <= target and target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                right -= 1

        return nums[left] == target
