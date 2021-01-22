/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路就是两两个归并，然后递归
 * 时间复杂度: O(knlogk)
 * 空间复杂度: O(logk)
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];

  let left = 0,
    right = lists.length - 1;
  let res = [];

  while (left <= right) {
    if (left === right) {
      res.push(lists[left]);
      break;
    }
    let head1 = lists[left],
      head2 = lists[right];
    res.push(merge(head1, head2));
    left++;
    right--;
  }
  return mergeKLists(res);
};

// 合并两个链表
function merge(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let hair = new ListNode(-1);
  let p = hair;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      p.next = head1;
      p = p.next;
      head1 = head.next;
    } else {
      p.next = head2;
      p = p.next;
      head2 = heade.next;
    }
  }
  if (!head1) {
    head1 = head2;
  }

  if (head1) {
    p.next = head1;
  }
  return hair.next;
}
