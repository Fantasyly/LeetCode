/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法1
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  /**
   * 第一种解法
   * 首先找到第m个节点
   * 然后从m开始, 通过for循环去翻转
   */
  if (!head || m >= n) return head;

  // 虚拟头节点
  let hair = new ListNode(-1);
  hair.next = head;
  /**
   * 结束时, p指向第m个
   * preStr指向前半链表的最后一个
   */
  let p = hair,
    preStr = null;
  for (let i = 0; i < m; i++) {
    preStr = p;
    p = p.next;
  }

  /**
   * tail保存p, 也就是翻转后链表的尾
   * pre和q都是用来翻转的
   */
  let tail = p,
    pre = null,
    q = p.next;
  // 从m开始 n+1时跳出
  for (let i = m; i <= n; i++) {
    p.next = pre;
    pre = p;
    p = q;
    q && (q = q.next);
  }

  // 如果m为1 那么要修改head节点 新的头节点为pre节点
  if (m === 1) {
    hair.next = pre;
    tail.next = p;
  } else {
    preStr.next = pre;
    tail.next = p;
  }
  return hair.next;
};
/**
 * 方法2
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  /**
   * 这个方法是题解中的方法
   * 挺巧妙的
   * 不过我还是喜欢第一种方法
   * 第一种解法更容易想出来
   * 也觉得更直观
   *
   * 时间复杂度: O(n)
   * 空间复杂度: O(1)
   */
  if (!head || m > n) return head;

  /**
   * preStr指针最后指向前半段链表的最后一个
   * p指针指向第m个
   */
  let preStr = null,
    p = head;
  while (m > 1) {
    preStr = p;
    p = p.next;
    m--;
    n--;
  }

  /**
   * pre指针是翻转时用的
   * 最后指向翻转链表的新的头指针
   * tail指针记录下第m个节点 也就是翻转后的尾节点
   */
  let pre = null,
    tail = p,
    q = p.next;
  // 进行翻转
  while (n > 0) {
    p.next = pre;
    pre = p;
    p = q;
    q && (q = q.next);
    n--;
  }

  // 把三段链表连接起来
  preStr && (preStr.next = pre);
  tail && (tail.next = p);

  // 如果preStr为空 说明是从第一个开始翻转的
  // 那么此时就不能返回head了 因为head发生变化了
  // 此时的head应该是翻转后的链表的头节点
  if (!preStr) return pre;
  return head;
};
