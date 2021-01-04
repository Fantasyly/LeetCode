from typing import List
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        if not numbers:
            return []
        """
        首先说一下思路 这道题比较简单
        双指针 分别指向数组首尾(数组是升序的)
        然后计算当前nums[left] + nums[right]的值
        若当前和小于target, left++
        若当前和大于target, right--
        若相等 则返回结果

        时间复杂度: O(N) 因为只需要遍历数组一次
        空间复杂度: O(1)

        此外,除了双指针法,这道题还可以用二分法来解
        首先固定一个左值, 比如说固定为nums[0], 接下来就是找到target - nums[0]的位置
        然后通过二分查找, 去nums[1-len]中寻找target - nums[0],找到就返回
        找不到的话就重新固定左值
        """
        left = 0
        right = len(numbers) - 1

        while (left < right):
            res = numbers[left] + numbers[right]
            if res == target:
                return [left + 1, right + 1]
            elif res < target:
                left += 1
            else :
                right -= 1
        

        