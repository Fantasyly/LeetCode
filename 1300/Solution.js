/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
    /**
     * 复杂度分析:
     *  时间复杂度: 二分查找O(logn), 求和O(n), 总的时间复杂度O(nlogn)
     *  空间复杂度: O(1)
     */
    const len = arr.length;
    if (len < 1) return -1;
  
    let left = 1,
      right = Math.max(...arr);
  
    while (left < right) {
      let mid = (left + right) >>> 1;
  
      // 获取此时的数组和
      const sum = arr.reduce((sum, value) => {
        if (value > mid) {
          sum += mid;
        } else {
          sum += value;
        }
        return sum;
      }, 0);
  
      if (sum < target) {
        /**
         * 如果sum小于target的话
         * 暂且放弃他
         * 我们想定一个大于target的value作为阈值
         *
         * 想象一下, 目标值是10,  我们某次得到的sum是2,那么left往右挤压
         *
         * 如果某次得到的是15, 那么right向左挤压
         *
         * 如果某次得到的是 9 , 那么还是left向右挤压,暂且放弃这个left,
         * 然后下次得到的是13, 那么right向左挤压, 此时left和right相等,退出循环
         *
         * 循环结束后 left的值是使数组和大于等于target的那个value,
         * 而left - 1 是使数组和小于target的那个value
         *
         * 然后我们去比较left-1的数组和 和 left的数组和 谁更接近target即可
         */
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    const sum1 = arr.reduce((sum, value) => {
      if (value > left) {
        sum += left;
      } else {
        sum += value;
      }
      return sum;
    }, 0);
  
    const sum2 = arr.reduce((sum, value) => {
      if (value > left - 1) {
        sum += left - 1;
      } else {
        sum += value;
      }
      return sum;
    }, 0);
  
    if (sum1 - target >= target - sum2) {
      return left - 1;
    }
    return left;
  };
  