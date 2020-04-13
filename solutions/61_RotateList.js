/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let tail = head;
  let length = 0;
  while(tail !== null) {
    tail = tail.next;
    length++;
  }

  const steps = k % length;
  const rotate = (headNode) => {
    let temp = headNode;
    let prev = null;
    while (temp.next !== null) {
      prev = temp;
      temp = temp.next;
    }

    temp.next = headNode;
    prev.next = null;

    return temp;
  }

  for (let i = 0; i < steps; i++) {
    head = rotate(head);
  }

  return head;
};