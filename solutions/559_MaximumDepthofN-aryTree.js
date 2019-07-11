/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  let level = traverse(root, 0, []);
  if (level.length === 0) {
    return 0;
  }

  return level.reduce(function(a, b){
    return Math.max(a, b);
  });
};

function traverse(root, currentLevel, level) {

  if (root === null) {
    return [];
  }

  if (root.children === null) {
    return currentLevel;
  }

  currentLevel++;
  level.push(currentLevel);

  for (let i of root.children) {
    traverse(i, currentLevel , level);
  }

  return level;
}