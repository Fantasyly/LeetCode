/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  if (S.length === 0) return [];
  let map = new Map();
  const res = [];
//   统计每个字母出现的次数
  for (let i = 0; i < S.length; i++) {
    if (map.get(S[i])) {
      map.set(S[i], map.get(S[i]) + 1);
    } else {
      map.set(S[i], 1);
    }
  }

  let set = new Set();
  let sum = 0, count = 0;
  for (let i = 0; i < S.length; i++){
      count++;
      let current = S[i];
      if (!set.has(current)) {
          sum += map.get(current);
          set.add(current);
      }

      if (count === sum) {
          res.push(sum);
          sum = 0;
          count = 0;
          set.clear();
      }
  }

  return res;
};
