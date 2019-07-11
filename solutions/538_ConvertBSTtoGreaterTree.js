/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {

  if (root === null) {
    return root;
  }

  let queue   = [];
  let number  = [];
  queue.push(root);

  while (queue.length !== 0) {
    let current = queue.pop();
    number.push(current.val);

    if (current.left !== null) {
      queue.unshift(current.left);
    }
    if (current.right !== null) {
      queue.unshift(current.right);
    }
  }

  number.sort(function (a, b) {
    return a - b;
  });

  queue.push(root);
  while (queue.length !== 0) {
    let current = queue.pop();
    for (let i = number.indexOf(current.val) + 1; i < number.length; i++) {
      current.val += number[i];
    }

    if (current.left !== null) {
      queue.unshift(current.left);
    }
    if (current.right !== null) {
      queue.unshift(current.right);
    }
  }

  return root;
};