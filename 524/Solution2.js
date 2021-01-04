/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  /**
   * 方法2:
   *  不排序
   *  直接进行判断
   * 注意判断的条件
   *
   * 复杂度分析:
   * 时间复杂度： O(n⋅x) 。这里 n 是列表 dd 中字符串的数目， x 是字符串平均长度。
   * 空间复杂度： O(x) 。使用了变量 res。
   */
  if (!s || !d) return "";

  const issubString = sub => {
    let lastIndex = -1;
    for (let i = 0; i < sub.length; i++) {
      let char = sub[i];
      let index = s.indexOf(char, lastIndex + 1);
      if (index === -1) {
        return false;
      }
      lastIndex = index;
    }
    return true;
  };

  let res = "";
  d.forEach(item => {
    if (issubString(item)) {
      if (
        !res ||
        item.length > res.length ||
        (res.length === item.length && res.localeCompare(item) > 0)
      )
        res = item;
    }
  });
  return res;
};
