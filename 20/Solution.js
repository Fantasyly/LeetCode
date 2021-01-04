/**
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true;

  const stack = [];
  const map = {};
  map["("] = ")";
  map["{"] = "}";
  map["["] = "]";
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }

    const peek = stack[stack.length - 1];
    if (s[i] === map[peek]) {　
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
