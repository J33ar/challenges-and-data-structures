const BinaryTree = require("../BinaryTree");
const TNode = require("../TNode");
const sumOfLeafNodes = require("../LeafSum/leafSum");

describe("Leaf Sum in Binary Tree", () => {
  test("should return sum of leaf nodes (example case)", () => {
    const Btree = new BinaryTree();

    Btree.root = new TNode(9);
    Btree.root.left = new TNode(8);
    Btree.root.right = new TNode(12);
    Btree.root.left.left = new TNode(3);
    Btree.root.left.right = new TNode(7);
    Btree.root.right.left = new TNode(17);
    Btree.root.right.right = new TNode(23);
    Btree.root.left.left.right = new TNode(4);

    expect(sumOfLeafNodes(Btree)).toBe(51);
  });

  test("should handle negative leaf values", () => {
    const Btree = new BinaryTree();

    Btree.root = new TNode(5);
    Btree.root.left = new TNode(-2);
    Btree.root.right = new TNode(8);
    Btree.root.left.left = new TNode(-4);
    Btree.root.left.right = new TNode(-6);

    // Leaves = -4, -6, 8
    expect(sumOfLeafNodes(Btree)).toBe(-2);
  });
});
