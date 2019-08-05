/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

  if (!root) {
    return null;
  }

  if (root.left) {

    let originalNextRight = root.right;
    let leftLastRight = root.left;
    while(leftLastRight.right) {
      leftLastRight = leftLastRight.right;
    }

    root.right = root.left;
    leftLastRight.right = originalNextRight;
    root.left = null;
  }

  flatten(root.right);
};