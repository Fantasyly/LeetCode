/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let lenS = s.length,
    lenT = t.length;
  if (!s || !t || lenS < lenT) return "";

  let winFreq = new Array(128).fill(0),
    tFreq = new Array(128).fill(0);

  for (let i = 0; i < t.length; i++) {
    tFreq[t[i].charCodeAt()]++;
  }

  let left = 0,
    right = 0,
    minLen = Infinity,
    distance = 0,
    begin = 0;

  while (right < lenS) {
    let cr = s[right].charCodeAt();
    // 如果t中没有出现这个字符 right扩张
    if (tFreq[cr] === 0) {
      right++;
      continue;
    }

    // 如果窗口中该字符的出现次数还不足以覆盖t distance++
    if (winFreq[cr] < tFreq[cr]) {
      distance++;
    }

    // 窗口中该字符出现的次数 + 1
    winFreq[cr]++;

    // 如果窗口已经覆盖了t  那么就要去收缩left
    while (distance === lenT) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        begin = left;
      }
      let cl = s[left].charCodeAt();
      // 如果t中没有这个字符 left收缩
      if (tFreq[cl] === 0) {
        left++;
        continue;
      }

      // 如果t中存在这个字符  且窗口中出现的频次等于t中出现的频次 那么distance-- 即无法覆盖了
      // 如果是大于的情况 那么说明哪怕删掉 也是可以覆盖的 因此可以不去动distance
      if (winFreq[cl] === tFreq[cl]) {
        distance--;
      }
      winFreq[cl]--;
      left++;
    }

    // 继续扩张right
    right++;
  }

  if (minLen > lenS) {
    return "";
  }
  return s.slice(begin, begin + minLen);
};
