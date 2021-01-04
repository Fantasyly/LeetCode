/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  /**
   * 对解法2进行优化
   * 不过从实际执行时间来看, 并没多大提升
   */
  if (!s1 || !s2) return false;

  let left = 0,
    right = 0,
    windowLen = s1.length,
    valid = 0;
  let s1Freq = new Array(128).fill(0);
  let window = new Array(128).fill(0);
  let needLen = new Set(s1).size;

  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1[i].charCodeAt()]++;
  }

  while (right < s2.length) {
    let char = s2[right].charCodeAt();
    if (s1Freq[char] === 0) {
      window = new Array(128).fill(0);
      right++;
      left = right;
      valid = 0;
      continue;
    }
    window[char]++;
    right++;

    if (window[char] === s1Freq[char]) {
      valid++;
    }

    if (valid === needLen) {
      return true;
    }

    // 窗口还未形成
    if (right - left < windowLen) continue;

    let leftChar = s2[left++].charCodeAt();

    if (window[leftChar] === s1Freq[leftChar]) {
      valid--;
    }
    window[leftChar]--;
  }
  return false;
};
