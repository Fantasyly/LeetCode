/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const reverse = head => {
  let p = head,
    pre = null,
    q = p.next;
  while (p) {
    p.next = pre;
    pre = p;
    p = q;
    q = q.next;
  }
  return pre;
};
/**
 * 1. 快慢指针去找到后半段链表的起点
 * 2. 翻转后半段链表
 * 3. 判断是否是回文
 * 4. 翻转后半段链表 修复链表
 * 5. 返回结果
 * 时间复杂度： O(n)
 * 空间复杂度: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;

  // 快慢指针寻找后半段链表的起点
  let fast = head,
    slow = head,
    tail = null;
  while (fast && slow) {
    /**
     * 把fast放在前面先走，
     * 这样最后停止的时候，
     * 如果链表长度是奇数，slow指向中间那个
     * 如果是偶数，slow指向后半段链表的第一个
     *
     * 把slow放在前面先走
     * 不管长度如何，slow都指向后半链表的第一个
     * 因此需要一个变量记住其前一个值，用于修复链表
     */
    tail = slow;
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      break;
    }
  }

  // 翻转后半段链表
  let secondHead = reverse(slow);

  // 判断是否是回文链表
  let p = head,
    res = true;
  while (p && secondHead) {
    if (p.val !== secondHead.val) {
      res = false;
      break;
    }
    p = p.next;
    secondHead = secondHead.next;
  }

  // 修复链表
  tail.next = reverse(secondHead);
  return res;
};
