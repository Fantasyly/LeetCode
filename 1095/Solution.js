/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const len = mountainArr.length();

  const peak = findPeak(mountainArr);
  const leftRes = searchLeft(mountainArr, peak, target);
  if (leftRes != -1) return leftRes;
  return searchRight(mountainArr, peak, target);
};

function findPeak(mountainArr) {
  let left = 0,
    right = mountainArr.length() - 1;

  while (left < right) {
    let mid = (left + right) >>> 1;

    let midVal = mountainArr.get(mid);
    let midNextVal = mountainArr.get(mid + 1);

    if (midVal < midNextVal) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function searchLeft(mountainArr, peak, target) {
  let left = 0,
    right = peak;
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (mountainArr.get(mid) < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return mountainArr.get(left) === target ? left : -1;
}

function searchRight(mountainArr, peak, target) {
  let left = peak + 1,
    right = mountainArr.length() - 1;

  while (left < right) {
    let mid = (left + right) >>> 1;
    if (mountainArr.get(mid) > target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return mountainArr.get(left) === target ? left : -1;
}
