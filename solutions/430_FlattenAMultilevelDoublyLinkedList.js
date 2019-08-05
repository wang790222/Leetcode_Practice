/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {

  if (!head) {
    return null;
  }

  let cur = head;
  let child = null;
  let connect = null;
  while (cur) {
    if (cur.child) {
      connect = cur.next;
      child = flatten(cur.child);

      cur.child = null;
      cur.next = child;
      child.prev = cur;

      while (cur.next) {
        cur = cur.next;
      }

      cur.next = connect;
      if (connect) {
        connect.prev = cur;
      }
    }

    cur = cur.next;
  }

  return head;
};