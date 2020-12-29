/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 这一块代码是根据题解写的 看这个就行
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return head;

  // 定义一个虚拟节点hair
  let hair = new ListNode(0);
  let pre = hair;
  hair.next = head;
  let tail = hair;

  while (head) {
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        // 如果节点数不够k个 直接返回结果就可以了
        return hair.next;
      }
    }
    const nex = tail.next;
    [head, tail] = reverse(head, tail);

    // 上一个链表的尾连接上当前的头
    pre.next = head;

    // tail连接上下一个节点  这样下次循环的时候才能在for里找到tail.next
    tail.next = nex;

    // pre移动到该链表的尾巴
    pre = tail;

    // 更新head为nex
    head = nex;
  }
  return hair.next;
};
function reverse(head, tail) {
  let p = head,
    q = p.next,
    pre = null;

  while (p !== tail) {
    p.next = pre;
    pre = p;
    p = q;
    q = q.next;
  }
  p.next = pre;

  // 返回新的头和新的尾  左边是头 右边是尾
  return [tail, head];
}

/**
 * 这一块始自己的写的代码 太冗长了 还是看上面的代码
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) {
    return head;
  }

  let p = head,
    last = null;

  while (p) {
    let q = p,
      count = 1,
      r = null;
    while (p && count < k) {
      p = p.next;
      count++;
    }
    if (p) {
      r = p.next;
      reverse(q, p); // 反转q到p的这一段
      if (last) {
        last.next = p;
      } else {
        head = p;
      }
    } else {
      if (last) {
        last.next = q;
      } else {
        head = q;
      }
    }
    last = q;
    p = r;
  }

  return head;
};

function reverse(head, tail) {
  let p = head,
    q = p.next,
    pre = null;

  while (p !== tail) {
    p.next = pre;
    pre = p;
    p = q;
    q = q.next;
  }
  p.next = pre;
}
