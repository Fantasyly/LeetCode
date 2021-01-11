/**
 * 时间复杂度： O(n)
 * 空间复杂度： O(n)
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  if (!s.length) return s;
  let res = [],
    word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (s[i - 1] === " ") {
        continue;
      }
      res.unshift(word);
      word = "";
    } else {
      word += s[i];
    }
  }
  if (word.length) res.unshift(word);
  return res.join(" ");
};

/**
 * 直接使用JS提供的API的解法
 * 代码很简单
 * 从执行效果上看还比上面的代码更快
 * 时间复杂度： O(n)
 * 空间复杂度： O(n)
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};
