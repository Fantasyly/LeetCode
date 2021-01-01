/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  /**
   * 时间复杂度: O(maxLen(num1, num2))
   * 空间复杂度: O(n) 主要是结果数组的开销
   */
  if (!num1) return num2;
  if (!num2) return num1;

  let tag = 0;
  let ans = [];
  let i = num1.length - 1,
    j = num2.length - 1;
  for (i, j; i >= 0 || j >= 0; i--, j--) {
    const x = i >= 0 ? num1[i] * 1 : 0;
    const y = j >= 0 ? num2[j] * 1 : 0;
    let res = x + y + tag;

    // 这个代码写的太多余了
    // if (res >= 10) {
    //   ans.push(res % 10);
    //   tag = Math.floor(res / 10);
    // } else {
    //   ans.push(res);
    //   tag = 0;
    // }

    ans.push(res % 10);
    tag = Math.floor(res / 10);
  }

  if (tag !== 0) {
    ans.push(tag);
  }
  return ans.reverse().join("");
};
