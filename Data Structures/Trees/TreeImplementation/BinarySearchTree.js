const BinaryTree = require("./BinaryTree");
const TNode = require("./TNode");

class BinarySearchTree extends BinaryTree {

//   addR(value){
//     this.addNodeHelper(node.root,value);
//   }

//   addNodeHelper(node,value){
//     if (value < node.value) {
//         if (!node.left) {
//             node.left = new TNode(value);
//         } else {
//             this.addNodeHelper(node.left,value)
//         }
//     } else {
//         if (!node.right) {
//             node.right = new TNode(value);
//         } else {
//             this.addNodeHelper(node.right,value);
//         }
//     }
//   }

  add(value) {
    const newNode = new TNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  remove(value, node = this.root, parent = null) {
    if (!node) return false;

    if (value < node.value) {
      return this.remove(value, node.left, node);
    } else if (value > node.value) {
      return this.remove(value, node.right, node);
    } else {
      if (node.left && node.right) {
        let successor = this.findMin(node.right);
        node.value = successor.value;
        this.remove(successor.value, node.right, node);
      } else if (parent === null) {
        this.root = node.left ? node.left : node.right;
      } else if (parent.left === node) {
        parent.left = node.left ? node.left : node.right;
      } else {
        parent.right = node.left ? node.left : node.right;
      }
      return true;
    }
  }

  findMin(node) {
    while (node.left) node = node.left;
    return node;
  }
}

module.exports = BinarySearchTree;
