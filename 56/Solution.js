/**
 * 时间复杂度:O(nlogn)
 * 排序的时间复杂度是nlogn
 * 合并区间的时间复杂度是n
 * 因此总的时间复杂度是排序的时间复杂度
 * 空间复杂度:O(logn)排序的空间复杂度
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) return [];

  let ans = [];
  intervals.sort((a, b) => a[0] - b[0]);

  intervals.forEach(item => {
    if (!ans.length) ans.push(item);

    let last = ans[ans.length - 1];
    if (item[0] > last[1]) {
      ans.push(item);
    } else if (item[0] <= last[1] && item[1] > last[1]) {
      ans.pop();
      ans.push([last[0], item[1]]);
    }
  });
  return ans;
};
