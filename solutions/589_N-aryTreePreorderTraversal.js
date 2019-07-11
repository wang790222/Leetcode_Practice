/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  return preorderTraversal(root, []);
};

function preorderTraversal(root, resultArr) {

  if (root === null) {
    return [];
  }

  if (root.children === null) {
    return root.val;
  }

  resultArr.push(root.val);
  for (let i of root.children) {
    preorderTraversal(i, resultArr)
  }

  return resultArr;
}