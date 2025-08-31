function sumOfLeafNodes(tree) {
  if (!tree.root) return 0;

  let sum = 0;

  function traverse(node) {
    if (!node) return;

    if (!node.left && !node.right) {
      sum += node.value;
    }

    traverse(node.left);
    traverse(node.right);
  }

  traverse(tree.root);
  return sum;
}

module.exports = sumOfLeafNodes;
