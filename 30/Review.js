/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || !words) return [];
  let wordLen = words[0].length;
  let wordsLen = words.length;
  let count = 0;

  let left = 0,
    right = 0;
  let map = {};
  let res = [];
  words.forEach(word => {
    if (map[word]) {
      map[word]++;
    } else {
      map[word] = 1;
    }
  });
  let window = Object.assign({}, map);

  for (let i = 0; i < wordLen; i++) {
    left = i;
    right = left;
    window = Object.assign({}, map);
    count = 0;

    while (right <= s.length) {
      let word = s.slice(right, right + wordLen);
      if (!map[word]) {
        //   如果这个单词不存在的话  那么left就要重置了
        right += wordLen;
        left = right;
        window = Object.assign({}, map);
        count = 0;
        continue;
      }
      window[word]--;
      right += wordLen;
      count++;

      while (window[word] < 0) {
        let leftWord = s.slice(left, left + wordLen);
        window[leftWord]++;
        left += wordLen;
        count--;
      }
      if (count === wordsLen) {
        res.push(left);
      }
    }
  }

  return res;
};
