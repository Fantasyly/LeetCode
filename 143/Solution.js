/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1. 先找到中点
 * 2. 逆置后半段节点
 * 3. 归并两个链表
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return;

  // 找到链表的中点
  let fast = head,
    slow = head,
    pre = null;

  while (fast) {
    pre = slow;
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      fast = null;
    }
  }

  // 断开前半段和后半段链表
  pre.next = null;

  /**
   * 对于奇数长度的链表  比如1 2 3 4 5
   * 此时slow指向4
   * 对于偶数长度的链表 1 2 3 4
   * 此时slow指向3
   * 然后去逆置后半段链表
   */
  let q = reverse(slow);

  let p = head;

  while (p) {
    let r1 = p.next,
      r2 = q.next;

    p.next = q;
    q.next = r1;

    p = r1;
    q = r2;
  }
};

/**
 * 逆置链表
 * @param {ListNode} head
 */
function reverse(head) {
  let p = head,
    q = head.next,
    pre = null;

  while (p) {
    p.next = pre;
    pre = p;
    p = q;
    q && (q = q.next);
  }
  return pre;
}
