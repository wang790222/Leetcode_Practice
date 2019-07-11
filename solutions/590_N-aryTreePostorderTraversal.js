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

var postorder = function(root) {

  return postorderTraversal(root, []);
};

function postorderTraversal(root, resultArr) {
  if (root === null) {
    return [];
  } else {
    if (root.children === null) {
      return root.val;
    } else {
      for (let i = 0; i < root.children.length; i++) {
        postorderTraversal(root.children[i], resultArr);
      }
    }
    resultArr.push(root.val);
    return resultArr;
  }
}