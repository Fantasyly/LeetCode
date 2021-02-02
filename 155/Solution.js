/**
 * 题解的答案
 * 缺点是需要额外的空间
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 存储数据的栈
  this.stack = [];
  // 存储最小值的栈
  this.min = [];
  this.len = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // 如果栈空的话  直接放进去
  if (this.len === 0) {
    this.stack.push(x);
    this.min.push(x);
    this.len++;
    return;
  }

  // 获取当前的最小值
  let last = this.min[this.len - 1];
  this.stack.push(x);
  this.min.push(Math.min(x, last));
  this.len++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min.pop();
  this.len--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.len - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
