class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if not nums:
            return
        size = len(nums)

        """
        首先想想思路   例如1 2 3 4 7 5 4 3 1
        我们很容易就会想到冒泡的思想
        就是逆序遍历数组  找到第一个满足nums[i] < nums[i + 1]的nums[i]
        此时交换nums[i] 与 nums[i + 1], 交换后序列变大了
        但是,
        这种方法并不是下一个大的序列
        我们现在能找到4就是较小的数, 把7和4交换,虽然会变大,但是太大了
        因为后面有一个大于4的小一点的数 5
        如果把5与4交换 就可以得到 1 2 3 5 7 4 3 1
        但是这样还不是最优  我们可以看到交换后 5后面都是递减的 如果后半段变成递增的  那么才是最优的
        也就是1 2 3 5 1 3 4 7

        总结思路: 
            1. 逆序遍历数组,找到满足nums[i] < nums[i + 1]的第一个nums[i](此时从i+1到数组结束为降序)
            2. 逆序遍历数组, from size - 1 to i + 1, 找到第一个大于nums[i]的数nums[j]
            3. 交换nums[i]与nums[j]
            4. i + 1到数组结束均为降序,对其排序,使其变为升序(可以直接逆置即可)
        """
        for i in range(size - 2, -1, -1):
            # 找nums[i]
            if nums[i] < nums[i + 1]:
                # 逆序遍历数组 找到第一个大于nums[i]的数
                for j in range(size - 1, i, -1):
                    if nums[j] > nums[i]:
                        # 交换
                        nums[i], nums[j] = nums[j], nums[i]
                        break

                # 把后半部分数组进行升序排序
                left = i + 1
                right = size - 1
                while left < right:
                    nums[left], nums[right] = nums[right], nums[left]
                    left += 1
                    right -= 1

                return
            
        nums.sort()

                    


        