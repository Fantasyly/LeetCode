/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
   * 首先说一下思路:
   *  有了上道题的经验
   *  再看这道题 就会觉得这道题很简单
   *
   *  找到最长不含重复字符的子串
   *  定义一个窗口 [left,right)
   *  right不断向右扩张, 并把出现的字符放到map中, 值为其索引
   *  当right遇到一个map中已有的元素时,
   *      比较maxLen与当前长度,取大者
   *  随后窗口缩减,left++,
   *      每缩减一个元素  map中就删除该元素
   *      那么要缩减道哪里呢? 即缩减到出现重复的那个字符处 ,即map.get(s[right])
   *      缩减到此处后 left++  形成新的窗口 此时窗口中都是不重复的元素
   *
   *  **特殊情况:**
   *      如果s中没有重复元素,那么right就会一直扩张直到数组越界,此时要注意maxLen没有机会更新了
   *      因此在最后把maxLen和curLen的最大值返回去
   *
   *  时间复杂度: O(n)
   *  空间复杂度: O(n)
   */
  if (!s) return 0;
  if (s.length === 1) return 1;
  let map = new Map();

  // 窗口左边界和右边界
  let left = 0,
    right = 0,
    maxLen = 0,
    curLen = 0;
  while (right < s.length) {
    let char = s[right];
    // 窗口向右扩张
    if (!map.has(char)) {
      map.set(char, right);
      right++;
      curLen++;
      continue;
    }

    if (curLen > maxLen) {
      maxLen = curLen;
    }
    // 窗口收缩 收缩到出现与当前字符重复的位置
    while (left <= map.get(char)) {
      map.delete(s[left++]);
    }
    curLen = map.size;
  }
  return Math.max(maxLen, curLen);
};
