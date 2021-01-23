var CQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.pushStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.popStack.length) {
    return this.popStack.pop();
  }

  while (this.pushStack.length) {
    this.popStack.push(this.pushStack.pop());
  }
  return this.popStack.length ? this.popStack.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
