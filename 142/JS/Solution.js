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
var detectCycle = function (head) {
  /**
   * 首先说一下思路
   * 这道题的关键在于两步 1. 确定是否有环 2. 找到环的入口
   * 第一步很简单,很容易就能想到快慢指针
   * 关键是第二步,我们不需要记住数学推导,但是我们记住找到环入口的办法
   * 当slow和fast相遇时, 即有环
   * 此时让一指针p指向head
   * p和slow同步移动,当p和slow相遇时,即为环的入口
   *
   * 时间复杂度：O(N)，其中 N 为链表中节点的数目。
   *   在最初判断快慢指针是否相遇时，slow 指针走过的距离不会超过链表的总长度；
   *   随后寻找入环点时，走过的距离也不会超过链表的总长度
   *   因此，总的执行时间为 O(N)+O(N)=O(N)。
   * 空间复杂度：O(1)
   */
  if (!head) return head;
  let slow = head,
    fast = head;

  while (slow && fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (slow === fast) {
      fast = head;
      while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
};
