/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  /**
   * 暴力解法
   * 暴力的思路:
   *  我们知道一个单词的长度,从而可以求出所求子串的长度allLen 也就是一个单词从长度 * words.length
   *  然后我们生成一个wordsMap   把words中的所有单词及出现的次数存到wordsMap中
   *  然后定义left和right
   *  left = 0 , right = left + allLen
   *  然后把left到right这一段的单词存到map中
   *  比较map和wordsMap是否完全一样 若一样,则把left存入结果数组
   *  若不一样 left++
   *
   *  JS有些难受的地方就是它没有判断两个map是否相等的内置方法, 只能自己去遍历
   *  因此下面的代码直接用了一个对象当作wordsMap,
   *  然后每次遍历时, 对其做一个拷贝,得到wp
   *  每次若遍历到wp存在的单词,wp中该单词次数-1, 遍历到不存在的直接break
   *  最后判断wp中所有key对应的值是否都是0  若都是0 则将left添加到结果数组中
   *
   *  时间复杂度: O(n^2) 每次从left开始都要遍历allLen长度
   */
  if (!s || !words) return [];

  let oneWord = words[0].length;
  let allLen = oneWord * words.length;
  let wordMap = {};
  let res = [];
  // 为words生成对应的map
  for (const w of words) {
    wordMap[w] ? wordMap[w]++ : (wordMap[w] = 1);
  }

  // 因为要找的子串的长度是allLen  所以left遍历到最后一个子串的开头就可以了
  for (let left = 0; left < s.length - allLen + 1; left++) {
    // 拷贝一个wordsMap
    let wp = Object.assign({}, wordMap);

    // 一个单词的右边界
    let right = left + oneWord;
    // curLeft - right是截取的单词
    let curLeft = left;

    while (right <= left + allLen) {
      // 截取单词
      let w = s.slice(curLeft, right);

      if (wp[w]) {
        // 如果存在这个单词 将其--
        wp[w]--;
      } else {
        // 如果不存在 说明子串中出现了words没有的单词 直接break
        break;
      }
      curLeft += oneWord;
      right += oneWord;
    }

    if (Object.values(wp).every(n => n === 0)) {
      res.push(left);
    }
  }
  return res;
};
