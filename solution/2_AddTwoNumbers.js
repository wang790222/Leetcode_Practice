/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let temp = [];
  let index = 0;
  while(l1 && l2) {
      if (!temp[index]) {
          temp[index] = 0;
      }

      if (l1.val + l2.val + temp[index] >= 10) {
          temp[index + 1] = 1;
          temp[index] = (l1.val + l2.val + temp[index]) - 10;
      } else {
          temp[index] += l1.val + l2.val;
      }
      l1 = l1.next;
      l2 = l2.next;
      index++;
  }

  while (l1) {
      if (!temp[index]) {
          temp[index] = 0;
      }
      temp[index] += l1.val;

      if (temp[index] >= 10) {
          temp[index + 1] = 1;
          temp[index] = 0;
      }

      l1 = l1.next;
      index++;
  }

  while (l2) {
      if (!temp[index]) {
          temp[index] = 0;
      }
      temp[index] += l2.val;
      if (temp[index] >= 10) {
          temp[index + 1] = 1;
          temp[index] = 0;
      }
      l2 = l2.next;
      index++;
  }

  let head = null;
  for (let n of temp) {
      if (!head) {
          head = new ListNode(n);
      } else {
          let cur = head;
          while (cur.next) {
              cur = cur.next;
          }

          cur.next = new ListNode(n);
      }
  }

  return head;
};