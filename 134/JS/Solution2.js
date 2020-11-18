/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    /**
     * 贪心思想求解
     */
  if (gas.length != cost.length || !gas) return -1;

  let sum1 = gas.reduce((prev, value) => (prev += value), 0);
  let sum2 = cost.reduce((prev, value) => (prev += value), 0);
  if (sum1 < sum2) return -1;

  let gasBox = 0, start = 0;

  for (let i = 0; i < gas.length; i++){
      gasBox += gas[i] - cost[i]
      if (gasBox < 0) {
          gasBox = 0
          start = i + 1
      }
  }
  // 当gas的sum大于等于cost的sum时  一定有解
  return start;
};
