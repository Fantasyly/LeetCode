/**
 * 判断一个字符串是不是回文字符串
 * @param {string} s
 */
const isPalindrome = s => {
  if (!s) return false;
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * 暴力解法
 * 时间复杂度： O(n^3)
 * 空间复杂度： O(1)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length === 1) return s;

  let longestLen = 1,
    ans = s[0];
  /**
   * i的范围是0 到 s.length - longestLen
   * 这样的话，如果后面剩余字符串的长度已经小于longestLen
   * 就不需要继续往后遍历了
   */
  for (let i = 0; i < s.length - longestLen; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let s2 = s.substring(i, j + 1);
      if (j - i + 1 > longestLen && isPalindrome(s2)) {
        longestLen = j - i + 1;
        ans = s2;
      }
    }
  }
  return ans;
};

/**
 * 动态规划
 * 题解看liweiwei大佬的
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度: O(n^2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length === 1) return s;

  // dp[i][j]表示s[i...j]是否是回文串
  let dp = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length);
  }

  // 状态数组初始化 对角线也就是一个字符的 肯定是回文 肯定是true
  for (let i = 0; i < dp.length; i++) {
    dp[i][i] = true;
  }
  let longestLen = 1,
    start = 0;
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      /**
       * 更新状态数组
       */
      // 如果首尾不同 肯定不是回文
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        /**
         * j - i + 1 < 4 是为了防止后面判断时数组越界
         * 同时，这也很好理解
         * 如果子串的长度小于4的话 那就是0 1 2 3
         * 且首尾相同的话
         * 对于长度为3的 形如aba的肯定是回文了
         * 其余也俄一样
         */
        if (j - i + 1 < 4) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      /**
       * 更新最长回文子串的长度和起点
       */
      if (dp[i][j] && j - i + 1 > longestLen) {
        longestLen = j - i + 1;
        start = i;
      }
    }
  }
  return s.substr(start, longestLen);
};
