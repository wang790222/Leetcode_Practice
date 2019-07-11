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
var isPalindrome = function(head) {

  let linkLength = 0;
  let current = head;

  while (current !== null) {
    current = current.next;
    linkLength++;
  }

  if (linkLength < 2) {
    return true;
  }

  let rightPart = head;
  if (linkLength % 2 === 0) {
    for (let i = 0; i < (linkLength / 2 | 0 ); i++)     {
      rightPart = rightPart.next;
    }
  } else {
    for (let i = 0; i < (linkLength / 2 | 0 ) + 1; i++)     {
      rightPart = rightPart.next;
    }
  }

  rightPart = reverse(rightPart);

  for (let i = 0; i < (linkLength / 2 | 0 ); i++) {
    if (head.val !== rightPart.val) {
      return false;
    }

    head = head.next;
    rightPart = rightPart.next;
  }

  return true;
};

function reverse (head) {

  let current = head;
  let newHead = null;

  while (current !== null) {
    temp = current;
    current = current.next;
    temp.next = newHead;
    newHead = temp;
  }

  return newHead;
}


