/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var getIntersectionNode = function (headA, headB) {
  /**
   * 时间复杂度: O(n)
   * 空间复杂度: O(1)
   * 思路具体见官方题解
   * 大概思路就是
   *  指针p和指针q分别指向两个链表的头
   *  然后依次往后移动
   *  若p为null, 则p指向链表2的头
   *  若q为null, 则q指向链表1的头
   *  然后依次移动
   *  若二者相等 则有交点  返回
   *  当二者都等于null时, 也就是没环, 此时仍能顺利退出循环, 直接return
   *
   * 原理就是假设链表1的长度是A 链表2的长度是B
   * 那么p和q走的路程都是A+B
   * 路程相同, 且速度相同, 那么p和q总会相遇
   */
  if (!headA || !headB) return null;
  let p = headA,
    q = headB;
  while (p !== q) {
    // if (!p) {
    //   p = headB;
    // } else {
    //   p = p.next;
    // }

    // if (!q) {
    //   q = headA;
    // } else {
    //   q = q.next;
    // }

    // 下面的代码可以代替上面的
    p = p ? p.next : headB;
    q = q ? q.next : headA;
  }

  return p;
};

/**
 * 这是自己的解法
 * 也是考研的时候学到的解法
 * 但是这样的话 要遍历两次链表
 * 上面的方法出自题解 真的是非常巧妙了
 * 非常的amazing
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let p = headA,
    q = headB;
  let len1 = 0,
    len2 = 0;
  while (p || q) {
    if (p) len1++;
    if (q) len2++;
    p && (p = p.next);
    q && (q = q.next);
  }

  p = headA;
  q = headB;
  while (len1 > len2) {
    p = p.next;
    len1--;
  }

  while (len2 > len1) {
    q = q.next;
    len2--;
  }
  while (p !== q) {
    p = p.next;
    q = q.next;
  }
  return p;
};
