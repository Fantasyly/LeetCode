/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  /**
   * 时间复杂度: O(m+n)
   * 空间复杂度: O(m+n) 用于返回结果的链表
   */
  if (!l1) return l2;
  if (!l2) return l1;

  let p1 = l1,
    p2 = l2;
  let head = new ListNode();
  let q = head;
  while (p1 && p2) {
    if (p1.val > p2.val) {
      q.next = new ListNode(p2.val);
      p2 = p2.next;
    } else {
      q.next = new ListNode(p1.val);
      p1 = p1.next;
    }
    q = q.next;
  }
  if (p2) {
    p1 = p2;
  }
  while (p1) {
    q.next = new ListNode(p1.val);
    q = q.next;
    p1 = p1.next;
  }
  return head.next;
};
