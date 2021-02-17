/**
 * class版本的代码
 */
/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(x) {
    this.pushStack.push(x);
  }

  pop(x) {
    if (this.popStack.length) {
      return this.popStack.pop();
    } else {
      shift(this.pushStack, this.popStack);
      return this.popStack.pop();
    }
  }

  peek() {
    if (this.popStack.length) {
      return this.popStack[this.popStack.length - 1];
    } else {
      shift(this.pushStack, this.popStack);
      return this.popStack[this.popStack.length - 1];
    }
  }

  empty() {
    return this.popStack.length === 0 && this.pushStack.length === 0;
  }
}

function shift(arr1, arr2) {
  while (arr1.length) {
    arr2.push(arr1.pop());
  }
}
