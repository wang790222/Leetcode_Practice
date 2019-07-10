/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

  if (head === null) {
    return false;
  }

  let walker = head;
  let runner = head;

  while (true) {
    if (walker === null || walker.next === null) {
      return false;
    }
    walker = walker.next;


    if (runner === null || runner.next === null || runner.next.next === null) {
      return false;
    }
    runner = runner.next.next;

    if (walker === runner) {
      return true;
    }
  }

  return false;
};