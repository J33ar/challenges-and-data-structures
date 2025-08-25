function findSecondMax(tree) {
  if (!tree.root) return null;

  let current = tree.root;
  let parent = null;

  while (current.right) {
    parent = current;
    current = current.right;
  }

  // إذا أكبر نود عندها فرع يسار -> ثاني أكبر هو أكبر نود باليسار
  if (current.left) {
    let temp = current.left;
    while (temp.right) {
      temp = temp.right;
    }
    return temp.value;
  }

  // غير هيك -> ثاني أكبر هو الأب
  return parent ? parent.value : null;
}

module.exports = findSecondMax;
