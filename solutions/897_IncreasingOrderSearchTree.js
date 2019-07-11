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
var increasingBST = function(root) {

  let newTreeArr = [];
  let newTree = null;

  function dfs(root) {

    if (!root) {
      return;
    }

    if (root.left) {
      dfs(root.left);
    }

    newTreeArr.push(root.val)

    if (root.right) {
      dfs(root.right);
    }
  }

  dfs(root);
  console.log(newTreeArr);
  for (let node of newTreeArr) {
    if (!newTree) {
      newTree = new TreeNode(node);
    } else {
      let cur = newTree;
      while (cur.right !== null) {
        cur = cur.right;
      }

      cur.right = new TreeNode(node);
    }
  }
  return newTree;
};