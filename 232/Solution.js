function shift(source, target) {
  while (source.length > 0) {
    target.push(source.pop());
  }
  return [source, pop];
}
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stackPush = new Array();
  this.stackPop = new Array();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackPush.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stackPop.length) {
    return this.stackPop.pop();
  }

  [this.stackPush, this.stackPop] = shift(this.stackPush, this.stackPop);
  return this.stackPop.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stackPop.length) {
    return this.stackPop[this.stackPop.length - 1];
  }

  [this.stackPush, this.stackPop] = shift(this.stackPush, this.stackPop);
  return this.stackPop[this.stackPop.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stackPop.length === 0 && this.stackPush.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
