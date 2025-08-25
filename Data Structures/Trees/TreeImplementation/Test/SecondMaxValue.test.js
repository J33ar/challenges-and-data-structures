const BinaryTree = require("../BinaryTree");
const TNode = require("../TNode");
const findSecondMax = require("../SecondMaxValue/SecondMaxValue");

test("Finds second max in a normal tree", () => {
  let tree = new BinaryTree();
  tree.root = new TNode(10);
  tree.root.left = new TNode(5);
  tree.root.right = new TNode(20);
  tree.root.right.right = new TNode(25);

  expect(findSecondMax(tree)).toBe(20); 
});

test("Tree with one node returns null", () => {
  let tree = new BinaryTree();
  tree.root = new TNode(10);
  expect(findSecondMax(tree)).toBe(null); 
});

test("Tree with negatives", () => {
  let tree = new BinaryTree();
  tree.root = new TNode(-10);
  tree.root.left = new TNode(-20);
  tree.root.right = new TNode(-5);

  expect(findSecondMax(tree)).toBe(-10); 
});
