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
var maxDepth = function(root) {

  return traverse(root, 1, 1);
};

function traverse (root, curLvl, maxLvl) {

  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return curLvl;
  }

  curLvl++;
  if (curLvl > maxLvl) {
    maxLvl = curLvl;
  }

  let leftMax = null;
  if (root.left !== null) {
    leftMax = traverse(root.left, curLvl, maxLvl);
  } else {
    leftMax = curLvl;
  }

  let rightMax = null;
  if (root.right !== null) {
    rightMax = traverse(root.right, curLvl, maxLvl);
  } else {
    rightMax = curLvl;
  }

  return Math.max(leftMax, rightMax);
}