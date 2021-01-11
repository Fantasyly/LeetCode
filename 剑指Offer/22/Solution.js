/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 简单题
 * 先找到正数k个
 * 然后遍历即可
 * 注意count的取值
 * 注意第二次循环的终止条件
 * 时间复杂度： O(n)
 * 空间复杂度：O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (!head || k <= 0) return head;
  let p = head,
    count = 1;
  while (count < k && p) {
    p = p.next;
    count++;
  }
  let q = head;

  while (p.next) {
    p = p.next;
    q = q.next;
  }
  return q;
};
