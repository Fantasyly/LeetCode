/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  /**
   * 这道题唯一要注意的地方
   * 就是左值和右值不同时,
   * 要选择是删除左边还是删除右边
   * 因此, 单独写了个判断是否是回文串的方法
   * 判断删除左/右边后的剩余子串是否是回文串
   * 如果满足 直接返回true
   * 否则 返回fasle
   *
   *
   * 时间复杂度：O(n)
   *    其中 n是字符串的长度。
   *    判断整个字符串是否是回文字符串的时间复杂度是O(n)，
   *    遇到不同字符时，判断两个子串是否是回文字符串的时间复杂度也都是 O(n)。
   * 空间复杂度：O(1)。只需要维护有限的常量空间。
   */
  if (!s) return true;

  let left = 0,
    right = s.length - 1;

  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      if (isPalindrome(s.slice(left + 1, right + 1)) || isPalindrome(s.slice(left, right))) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
};

function isPalindrome(s) {
  if (!s) return true;
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
