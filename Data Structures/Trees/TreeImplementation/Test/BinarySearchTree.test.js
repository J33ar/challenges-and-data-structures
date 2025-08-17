const BinarySearchTree = require("../BinarySearchTree");

describe("BinarySearchTree", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
  });

  test("Add & Contains", () => {
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(100)).toBe(false);
  });

  test("Remove", () => {
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
  });
});
