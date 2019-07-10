/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

  let current  = head;
  let previous = null;

  while(current !== null) {
    if (current.val === val) {
      if (previous) {
        previous.next = current.next;
        if (previous.next && previous.next.val !== val) {
        previous = current;
        }
      } else {
        head = current.next;
      }
    } else {
      previous = current;
    }

    current = current.next;
  }

  return head;
};