const TNode = require("./TNode");
const BinarySearchTree = require("./BinarySearchTree");
const findSecondMax = require("./SecondMaxValue/SecondMaxValue");
// Example run
// const bst = new BinarySearchTree();
// bst.add(10);
// bst.add(5);
// bst.add(15);
// bst.add(3);
// bst.add(1);
// bst.add(7);

// console.log("Contains 7:", bst.contains(7)); // true
// bst.remove(5);
// console.log("Contains 5:", bst.contains(5)); // false

// console.log("PreOrder:", bst.preOrder());
// console.log("InOrder:", bst.inOrder());
// console.log("PostOrder:", bst.postOrder());


let Btree = new BinarySearchTree();
Btree.root = new TNode(10);
Btree.root.left = new TNode(5);
Btree.root.right = new TNode(20);
Btree.root.left.left = new TNode(3);
Btree.root.left.right = new TNode(7);
Btree.root.right.left = new TNode(15);
Btree.root.right.right = new TNode(25);

let secondMax = findSecondMax(Btree);
console.log("Second Max Value:", secondMax); // 🟢 Output: 20

