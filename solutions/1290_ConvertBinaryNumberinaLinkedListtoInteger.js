/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  if (!head) {
    return 0;
  }

  let cur = head;
  let nodeAmount = 0;
  let result = 0;
  while (cur !== null) {
    nodeAmount++;
    cur = cur.next;
  }

  cur = head;
  while (cur !== null) {
    result += (Math.pow(2, nodeAmount - 1) * cur.val);
    nodeAmount--;
    cur = cur.next;
  }

  return result;
};