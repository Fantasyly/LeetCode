/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || !words) return [];

  let oneWord = words[0].length,
    wordsLen = words.length;
  let left = 0,
    right = 0,
    count = 0;
  let map = {};
  words.forEach(word => {
    map[word] = (map[word] || 0) + 1;
  });
  let window = { ...map };
  let res = [];

  for (let i = 0; i < oneWord; i++) {
    left = i;
    right = left;
    window = { ...map };
    count = 0;
    while (right <= s.length) {
      let word = s.slice(right, right + oneWord);
      if (!map[word]) {
        right += oneWord;
        left = right;
        window = { ...map };
        count = 0;
        continue;
      }

      window[word]--;
      count++;
      right += oneWord;

      while (window[word] < 0) {
        let leftWord = s.slice(left, left + oneWord);
        window[leftWord]++;
        left += oneWord;
        count--;
      }
      if (count === wordsLen) {
        res.push(left);
      }
    }
  }
  return res;
};
