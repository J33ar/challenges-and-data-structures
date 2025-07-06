const LinkedList = require('../linkedList');

describe("Rotate Linked List", () => {

  test("Rotate normal list by 2", () => {
    const list = new LinkedList();
    list.add(6);
    list.add(5);
    list.add(4);
    list.add(3);
    list.add(2);
    list.add(1);
    list.rotateLeft(2);
    expect(list.printList()).toEqual("Head -> 4 -> 3 -> 2 -> 1 -> 6 -> 5 -> Null");
  });

  test("Rotate single node by 1", () => {
    const list = new LinkedList();
    list.add(10);
    list.rotateLeft(1);
    expect(list.printList()).toEqual("Head -> 10 -> Null");
  });

  test("Rotate empty list by 3", () => {
    const list = new LinkedList();
    list.rotateLeft(3);
    expect(list.printList()).toEqual("Head -> Null");
  });

  test("Rotate list by 0 (no change)", () => {
    const list = new LinkedList();
    list.add(3);
    list.add(2);
    list.add(1); // Head -> 3 -> 2 -> 1
    list.rotateLeft(0);
    expect(list.printList()).toEqual("Head -> 3 -> 2 -> 1 -> Null");
  });

  test("Rotate list by length (should remain unchanged)", () => {
    const list = new LinkedList();
    list.add(30);
    list.add(20);
    list.add(10); // Head -> 30 -> 20 -> 10
    list.rotateLeft(3);
    expect(list.printList()).toEqual("Head -> 30 -> 20 -> 10 -> Null");
  });

  test("Rotate list by > length (k = 7)", () => {
    const list = new LinkedList();
    list.add(6);
    list.add(5);
    list.add(4);
    list.add(3);
    list.add(2);
    list.add(1); // Head -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 ->
    list.rotateLeft(7); // 7 % 6 = 1
    expect(list.printList()).toEqual("Head -> 5 -> 4 -> 3 -> 2 -> 1 -> 6 -> Null");
  });

  test("Rotate with negative k (right rotation)", () => {
    const list = new LinkedList();
    list.add(20);
    list.add(15);
    list.add(10);
    list.add(5); // Head -> 20 -> 15 -> 10 -> 5
    list.rotateLeft(-2); // Rotate right by 2 → effective left = 2
    expect(list.printList()).toEqual("Head -> 10 -> 5 -> 20 -> 15 -> Null");
  });

});
