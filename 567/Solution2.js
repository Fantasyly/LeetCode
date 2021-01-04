/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  /**
   * 首先说一下思路
   * 构建一个长度为s1.length的滑动窗口
   * 然后用数组代替map来记录s1和窗口中字母出现的频次
   * 为了避免去比较两个数组是否完全一样
   * 引入一个valid变量
   *  当窗口中某个字符出现的次数和s1中该字符出现的次数一样的时候
   *  valid + 1
   *  当valid等于s1中去重后所有字母的个数时, 返回true
   * 否则返回fasle
   */
  if (!s1 || !s2) return false;

  let left = 0,
    right = 0,
    windowLen = s1.length,
    valid = 0;
  // s1频数数组
  let s1Freq = new Array(128).fill(0);
  // 窗口频数数组
  let window = new Array(128).fill(0);
  // 最终需要的长度
  let needLen = new Set(s1).size;

  // 初始化s1频数数组
  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1[i].charCodeAt()]++;
  }

  while (right < s2.length) {
    let char = s2[right].charCodeAt();
    window[char]++;
    right++;

    // 如果窗口中某个字符出现次数已经等于s1中该字符的出现次数 valid++
    if (window[char] === s1Freq[char]) {
      valid++;
    }

    // 如果valid等于needlen的话 返回true 只是窗口满足要求
    if (valid === needLen) {
      return true;
    }

    // 初始窗口还未形成的话 直接continue
    if (right < windowLen) continue;

    // 向右动窗口  窗口中减去原左边界
    let leftChar = s2[left++].charCodeAt();

    if (window[leftChar] === s1Freq[leftChar]) {
      valid--;
    }
    window[leftChar]--;
  }
  return false;
};
