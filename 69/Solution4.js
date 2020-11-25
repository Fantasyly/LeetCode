/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  /**
   * 牛顿迭代法
   *  随机指定一个初始值x0
   *  迭代开始:
   *     xi = 0.5 * (x0 + c / x0)
   *     如果xi与x0很接近, 迭代结束
   *      x0 = xi;
   * 
   * 时间复杂度: O(logx)
   * 空间复杂度: O(1)
   */
  if (x === 0) return 0;

  let x0 = x;
  while (true) {
    let xi = 0.5 * (x0 + x / x0);
    if (Math.abs(x0 - x) < 1e-7) {
      break;
    }
    x0 = xi;
  }
  return Math.floor(x0);
};
