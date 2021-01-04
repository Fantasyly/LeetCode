function ListNode(key, value) {
  this.key = key;
  this.val = value;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = {}; // 哈希表 存储key及其对应的节点
  this.capacity = capacity;

  this.count = 0;

  this.dummyHead = new ListNode(); // 虚拟头节点
  this.dummyTail = new ListNode(); // 虚拟尾节点

  // 初始情况下 没有数据 就先把两个虚拟节点存起来
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.cache[key];
  if (!node) return -1;

  // 如果该节点存在  把它移动到链表头部 并且返回该值
  this.moveNode2Head(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.cache[key];
  // 如果当前节点存在
  if (node) {
    // 更新值
    node.val = value;

    // 将节点移动到到最前面
    this.moveNode2Head(node);
  } else {
    // 建立新的节点
    node = new ListNode(key, value);

    // 如果缓存满了 就删除链表尾的节点
    if (this.count === this.capacity) {
      // 删除末尾节点
      const k = this.deleteTail();

      // count减1
      this.count--;

      // 删除cache中存储的节点
      delete this.cache[k];
    }

    // 插入新节点
    this.insertHead(node);
    this.count++;
    this.cache[key] = node;
  }
};

/**
 * 将节点移动到最前面
 * @param {ListNode} node
 */
LRUCache.prototype.moveNode2Head = function (node) {
  // 保存node的next和prev节点
  const next = node.next;
  const prev = node.prev;

  // 拆出node
  node.next = null;
  node.prev = null;

  // prev和next建立联系
  prev.next = next;
  next.prev = prev;

  // node节点插入到最前面
  this.insertHead(node);
};

/**
 * 把节点插入到最前面
 * @param {ListNode} node
 */
LRUCache.prototype.insertHead = function (node) {
  // node插入到头部
  node.next = this.dummyHead.next;
  node.prev = this.dummyHead;
  node.next.prev = node;
  this.dummyHead.next = node;
};

/**
 * 删除末尾的节点
 */
LRUCache.prototype.deleteTail = function () {
  // 获取末尾节点
  const node = this.dummyTail.prev;

  // 获取末尾节点的前置节点
  const prev = node.prev;

  // 删除node节点
  prev.next = this.dummyTail;
  this.dummyTail.prev = prev;

  // 返回一个key 用于删除cache中存储的节点
  return node.key;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
