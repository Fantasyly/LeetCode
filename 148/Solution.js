/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 使用subLength来实现自底向上的归并
 * 并且不会改变原链表
 * 初始的subLength为1
 * 也就是两两归并
 * 然后subLength * 2
 * 时间复杂度:O(nlogn)
 * 空间复杂度:O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;

  let hair = new ListNode(0, head);
  let length = 0;
  let p = head;
  while (p) {
    length++;
    p = p.next;
  }

  for (let subLength = 1; subLength < length; subLength *= 2) {
    let pre = hair,
      cur = hair.next;

    while (cur !== null) {
      let head1 = cur;
      for (let i = 1; i < subLength && cur.next; i++) {
        cur = cur.next;
      }
      // cur此时指向第一段链表的最后一个

      /**
       * 因此head2要指向cur.next
       * 因此必须保证cur不为null
       * 如果第一段链表的长度能满足subLength
       * 那么cur就指向第一段链表的最后一个节点
       * 且head2也满足要求
       * 若第一段的长度就已经超过subLength了
       * 那么cur依然指向第一段的最后一个
       * 此时head2直接为null
       */
      let head2 = cur.next;

      // 断开第一段链表
      cur.next = null;

      // next保存下一对归并的头节点
      let next = null;
      cur = head2;

      for (let i = 1; i < subLength && cur; i++) {
        cur = cur.next;
      }
      // cur此时指向第二段链表的最后一个

      if (cur !== null) {
        next = cur.next;
        cur.next = null;
      }

      console.log(head1, head2);
      let merged = merge(head1, head2);

      pre.next = merged;

      while (pre.next) {
        pre = pre.next;
      }
      cur = next;
    }
    console.log(hair);
  }
  return hair.next;
};

/**
 * 使用数组进行自底向上的归并
 * 空间复杂度不满足题目要求
 * 时间复杂度:O(nlogn)
 * 空间复杂度:O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;

  const lists = [];

  let p = head,
    q = head.next;
  while (p) {
    p.next = null;
    lists.push(p);
    p = q;
    q && (q = q.next);
  }

  while (lists.length) {
    let head1 = lists.shift();
    let head2 = lists.shift();

    if (!head2) return head1;
    let res = merge(head1, head2);
    // console.log(res)
    lists.push(res);
  }
  return head;
};

/**
 * 归并两个链表为有序链表
 * @param {ListNode} head1
 * @param {ListNode} head2
 */
function merge(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;
  let hair = new ListNode();
  let p = head1,
    q = head2,
    pre = hair;

  while (p && q) {
    if (p.val < q.val) {
      pre.next = p;
      p = p.next;
    } else {
      pre.next = q;
      q = q.next;
    }
    pre = pre.next;
  }

  if (q) {
    p = q;
  }

  while (p) {
    pre.next = p;
    p = p.next;
    pre = pre.next;
  }
  return hair.next;
}
