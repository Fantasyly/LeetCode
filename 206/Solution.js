/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * 迭代反转链表
   * 时间复杂度: O(n) n为链表的长度
   * 空间复杂度: O(1)
   */
  if (!head) return head;

  /**
   * pre ------ p =====> q ======>......
   */
  let p = head,
    q = p.next,
    pre = null;

  while (p) {
    p.next = pre;
    pre = p;
    p = q;
    q && (q = q.next);
  }
  return pre;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * 递归反转链表
   * 时间复杂度: O(n) n为链表的长度
   * 空间复杂度: O(n) 递归栈的深度
   */
  if (!head) return head;
  let res = null;

  const reverse = node => {
    if (!node.next) {
      res = node;
      return node;
    }

    let prev = reverse(node.next);

    node.next = null;
    prev.next = node;
    return node;
  };
  reverse(head);
  return res;
};
