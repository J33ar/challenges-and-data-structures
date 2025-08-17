const TNode = require("./TNode");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // PreOrder: Root -> Left -> Right
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // InOrder: Left -> Root -> Right
  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // PostOrder: Left -> Right -> Root
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

module.exports = BinaryTree;
