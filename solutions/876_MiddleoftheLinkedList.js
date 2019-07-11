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
var middleNode = function(head) {

  let current = head;
  let count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }

  let target = 0;
  target = count / 2 | 0;
  current = head;
  while (target !== 0) {
    current = current.next;
    target--;
  }

  return current;
};