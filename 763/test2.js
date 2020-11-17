/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  if (S.length === 0) return [];
  let map = {};
  for (let i = 0; i < S.length; i++) {
    map[S[i]] = i;
  }

  let start = 0,
    scanStart = 0;
  const res = [];

  for (let i = 0; i < S.length; i++) {
    scanStart = Math.max(scanStart, map[S[i]]);
    if (i === scanStart) {
      res.push(i - start + 1);
      start = i + 1;
    }
  }
  return res;
};
