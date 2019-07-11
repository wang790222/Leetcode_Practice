/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 0;
  }


  let queue = [];
  let max = 0;
  queue.push(root);

  while (queue.length !== 0) {
    let current = queue.pop();
    let leftDepth = dfs(current.left, 0, 0);
    let rightDepth = dfs(current.right, 0, 0);
    let tempDiameter = leftDepth + rightDepth;
    if (tempDiameter > max) {
      max = tempDiameter;
    }

    if (current.left !== null) {
      queue.unshift(current.left);
    }
    if (current.right !== null) {
      queue.unshift(current.right);
    }
  }

  return max;
};

function dfs (root, length, maxLength) {

  if (root === null) {
    return maxLength;
  }

  length++;
  if (maxLength < length) {
    maxLength = length;
  }
  let maxLeft = dfs(root.left, length, maxLength);
  let maxRight = dfs(root.right, length, maxLength);

  return (maxLeft > maxRight) ? maxLeft : maxRight;
}