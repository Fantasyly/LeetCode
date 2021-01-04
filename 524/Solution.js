/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  /**
   * 首先说一下思路
   * 先对d进行排序, 按照字符串的长度进行排序,
   * 如果字符串相等的话,就按照字典序排序
   * 这里要记得JS中提供的 localeCompre方法,可以比较两个字符串的字典序
   *
   * 然后排好序后, 对d中的每个字符串进行判断,
   * 判断是不是"子串",(这里的子串并非是指标准意义的子串)
   * 因为题目要求的字符串是可以通过s删除一个或多个字符而构成的
   * 因此, 只需要判断s中是否包含d中的每个字符串即可
   *
   * 复杂度:
   * 时间复杂度： O(n⋅xlogn+n⋅x) 。这里， n表示列表d中字符串的数目，x表示字符串的平均长度。
   *   排序需要花费 O(nlogn) 的时间， isSubString 函数需要花费 O(x) 的时间去检查一个字符串是否是另一个字符串的子序列。
   * 空间复杂度： O(logn) 。排序平均需要 O(logn) 的空间。
   */
  if (!s || !d) return "";

  const issubString = sub => {
    /**
     * 第一种判断方法 使用字符串的indexOf方法
     */
    let lastIndex = 0;
    for (let i = 0; i < sub.length; i++) {
      let char = sub[i];
      let index = s.indexOf(char, lastIndex + 1);
      if (index === -1) {
        return false;
      }
      lastIndex = index;
    }

    /**
     * 第二种判断方法: 直接遍历
     */
    // let i = 0;
    // for (let j = 0; i < sub.length && j < s.length; j++){
    //     if (sub[i] === s[j]) {
    //         i++;
    //     }
    // }
    // return i === sub.length;
  };

  let res = "";
  d.sort((a, b) => {
    return a.length === b.length ? a.localeCompare(b) : a.length - b.length;
  });
  d.forEach(item => {
    if (issubString(item) && item.length > res.length) {
      res = item;
    }
  });
  return res;
};
