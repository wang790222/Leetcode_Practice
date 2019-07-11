/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

  if (!root) {
    return null;
  }

  let firsetPath = traverse(root, p.val, []);
  let secondPath = traverse(root, q.val, []);

  for (let i = firsetPath.length - 1; i >= 0; i--) {
    for (let j = secondPath.length - 1; j >= 0; j--) {
      if (firsetPath[i].val === secondPath[j].val) {
        return firsetPath[i];
      }
    }
  }
};

function traverse(root, target, path) {

  if (root === null ) {
    return path;
  }

  if (target > root.val) {
    path.push(root);
    traverse(root.right, target, path);
  } else if (target < root.val) {
    path.push(root);
    traverse(root.left, target, path);
  } else {
    path.push(root);
  }

  return path;
}