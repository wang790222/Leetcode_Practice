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
var findTilt = function(root) {

  return goRecursive(root, 0);
};

function goRecursive(root, tilt) {

  if (!root) {
    return tilt;
  }

  let leftSum = 0;
  let rightSum = 0;

  if (root.left) {
    leftSum = subTreeSum(root.left, 0);
  }

  if (root.right) {
    rightSum = subTreeSum(root.right, 0);
  }

  tilt += Math.abs(leftSum - rightSum);

  if (root.left) {
    tilt = goRecursive(root.left, tilt);
  }

  if (root.right) {
    tilt = goRecursive(root.right, tilt);
  }

  return tilt;
}

function subTreeSum(root, sum) {
  if (!root) {
    return sum;
  }

  sum += root.val;

  if (root.left) {
    sum = subTreeSum(root.left, sum);
  }

  if (root.right) {
    sum = subTreeSum(root.right, sum);
  }

  return sum;
}
