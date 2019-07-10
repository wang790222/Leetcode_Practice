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
var sortList = function(head) {

  let cur = head;
  let value = [];
  while (cur) {
    value.push(cur.val);
    cur = cur.next;
  }

  value = value.sort(function (a, b) {
    return a - b;
  });

  let resultHead = null;
  for (let num of value) {
    let newNode = new ListNode(num);
    if (!resultHead) {
      resultHead = newNode;
    } else {
      let cur = resultHead;
      while(cur.next) {
          cur = cur.next;
      }
      cur.next = newNode;
    }
  }

  return resultHead;
};