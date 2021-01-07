/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 时间复杂度: O(n)
 * 当链表中不存在环时，快指针将先于慢指针到达链表尾部，链表中每个节点至多被访问两次。
 * 当链表中存在环时，每一轮移动后，快慢指针的距离将减小一。而初始距离为环的长度，因此至多移动N轮。
 * 空间复杂度: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let fast = head,
    slow = head;
  while (slow && fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return false;
    }
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
