/**
 * 用一个栈来实现
 *
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 存储数据的栈
  this.stack = [];
  // 保存当前最小值
  this.min = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) {
    this.stack.push(x);
    this.min = x;
  } else {
    let diff = x - this.min;
    this.stack.push(diff);
    // 如果新的值更小的话 更新this.min
    if (diff < 0) {
      this.min = x;
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let diff = this.stack.pop();

  // diff就是其value - min的值
  if (diff < 0) {
    // 如果diff小于0  则此时的min就是其原本的值；
    let value = this.min;

    // 弹出之后 min就需要更改了
    // 注意 diff = x - this.min
    // 上一个min也就是x - diff
    this.min = value - diff;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length === 1) {
    return this.stack[0];
  }
  let diff = this.stack[this.stack.length - 1];
  if (diff < 0) {
    return this.min;
  }
  return diff + this.min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
