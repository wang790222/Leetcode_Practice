/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let length = 0;
  let temp = root;
  while (temp !== null) {
    length++;
    temp = temp.next;
  }

  const subLength = length / k|0;
  let remaining = (length / k >= 1) ? length % k : 0;
  let round = 0;
  let ans = [];
  temp = root;

  while (round < k) {
    let index = 1;

    ans.push(temp);
    while (index < (subLength + ((remaining > 0) ? 1 : 0 ))) {
      temp = temp.next;
      index++;
    }

    let tail = temp;
    if (temp) {
      temp = temp.next;
      tail.next = null;
    }

    remaining--;
    round++;
  }

  return ans;
};