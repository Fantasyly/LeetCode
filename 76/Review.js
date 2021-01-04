/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s || !t) return "";

  let left = 0,
    right = 0,
    begin = 0,
    minLen = Infinity,
    distance = 0,
    lenS = s.length,
    lenT = t.length;
  let map = new Array(128).fill(0),
    window = new Array(128).fill(0);
  for (let i = 0; i < lenT; i++) {
    map[t[i].charCodeAt()]++;
  }

  while (right < lenS) {
    let char = s[right].charCodeAt();

    if (map[char] === 0) {
      /**
       * 如果t中没有这个字符 那就直接right扩张
       * 注意 这个时候window中该字符可没有++
       */
      right++;
      continue;
    }

    if (window[char] < map[char]) {
      /**
       * 如果当前窗口中还没覆盖t的话
       * distance++
       */
      distance++;
    }
    window[char]++;

    /**
     * 如果当前窗口已经能覆盖
     */
    while (distance === lenT) {
      let leftChar = s[left].charCodeAt();
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        begin = left;
      }

      if (map[leftChar] === 0) {
        /**
         * 如果t中没有这个字符
         * 直接跳过 因为之前right扩张的时候 也没有把它加进来
         */
        left++;
        continue;
      }

      if (window[leftChar] === map[leftChar]) {
        /**
         * 只有等于的时候 才去缩减distance
         * 因为对于大于的  那么把该字符删掉仍然是满足要求的
         * 此时不能缩减distance
         */
        distance--;
      }
      window[leftChar]--;
      left++;
    }
    right++;
  }
  if (minLen > lenS) {
    return "";
  }
  return s.slice(begin, begin + minLen);
};
