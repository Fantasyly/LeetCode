/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (!s1 || !s2) return false;

  let s1Map = {},
    window = {};
  let left = 0,
    right = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Map[s1[i]] ? s1Map[s1[i]]++ : (s1Map[s1[i]] = 1);
  }
  while (right < s2.length) {
    let char = s2[right];
    //   window中该字符出现次数加1
    window[char] ? window[char]++ : (window[char] = 1);

    // 如果s1中没有该字符的话 更新left 并置空window
    if (!s1Map[char]) {
      left = right;
      right++;
      window = {};
      continue;
    }

    // 如果window中char值存在  且其出现次数大于s1中该字符出现的次数
    // left收缩
    while (window[char] && window[char] > s1Map[char]) {
      let leftChar = s2[left];
      window[leftChar]--;
      left++;
    }

    // 判断两个map是否完全相等
    let flag = true;
    for (const c in s1Map) {
      if (window[c] != s1Map[c]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
    right++;
  }
  return false;
};
