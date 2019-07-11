/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {

  let queue = [];
  let targetValue = root.val;

  queue.push(root);

  while (queue.length !== 0) {
    let tempNode = queue.shift();

    if (targetValue !== tempNode.val) {
      return false;
    }

    if (tempNode.left !== null) {
      queue.push(tempNode.left);
    }

    if (tempNode.right !== null) {
      queue.push(tempNode.right);
    }
  }

  return true;
};