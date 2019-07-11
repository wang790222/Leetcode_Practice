/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {

    let tempNode = queue.shift();
    if (tempNode.val === val) {
      return tempNode;
    }

    if (tempNode.left !== null) {
      queue.push(tempNode.left);
    }

    if (tempNode.right !== null) {
      queue.push(tempNode.right);
    }
  }

  return null;
};