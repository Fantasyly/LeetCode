class Solution:
    def checkPossibility(self, nums):
        if not nums:
            return False

        count = 0
        size = len(nums)
        for i in range(size - 1):
            # 如果找到了向下的拐点
            if nums[i] > nums[i + 1]:
                # 首先把修改次数加1
                count += 1

                # 如果修改次数已经是2了 那就直接返回False
                if count == 2:
                    return False
                '''
                然后就是选择修改方式 有两种修改方式
                分别是 当前值缩小  和   下一个值放大
                放大的情况下 不会对前面已经有序的序列产生影响  但是可能会在后面产生新的拐点
                缩小会对前面的序列产生影响 因此缩小必须确保的前提是 拐点前的值 <= 拐点后的值
                在不满足条件的情况下  对下一个值进行放大
                其余都去缩小当前值
                '''
                if i - 1 >= 0 and nums[i - 1] > nums[i + 1]:
                    # 没有别的选择的情况下 只能去放大下一个值
                    nums[i + 1] = nums[i]
                else:
                    '''
                    满足条件的情况下  缩小当前值
                    注意: 把缩小放在else里是比较好的做法
                    因为如果是 4 2 3 这种情况, 拐点位置是0 不满足i >= 1 因此无法进入放大的if
                    只能进入缩小的else  正好可以缩小4 满足条件
                    '''
                    nums[i] = nums[i + 1]
        return True
