/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

 /**
  * O(n^2)的解法 暴力求解
  */
var canCompleteCircuit = function (gas, cost) {
  if (gas.length != cost.length || !gas) {
    return -1;
  }

  let start = 0;

  const canCircle = start => {
    let index = start + 1;
    let gasBox = gas[start];
    while (index != start) {
      if (index === gas.length) {
        index = 0;
        continue;
      }

      //   减去到达该加油站的油耗
      if (index === 0) {
        gasBox -= cost[gas.length - 1];
      } else {
        gasBox -= cost[index - 1];
      }

      if (gasBox < 0) return false;

      //   加油
      gasBox += gas[index];
      index++;
    }

    if (start === 0) {
      gasBox -= cost[gas.length - 1];
    } else {
      gasBox -= cost[index - 1];
    }

    return gasBox >= 0;
  };

  const findStart = lastStart => {
    let index = lastStart + 1;
    while (index < gas.length) {
      if (gas[index] >= cost[index]) {
        return index;
      }
      index++;
    }
    if (index === gas.length) {
      return -1;
    }
  };

  start = findStart(-1);
  while (start < gas.length) {
    if (start !== -1 && canCircle(start)) {
      return start;
    }
    start = findStart(start);
    if (start === -1) {
      return -1;
    }
  }
};
