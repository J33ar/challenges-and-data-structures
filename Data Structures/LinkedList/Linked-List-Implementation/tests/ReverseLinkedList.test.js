const LinkedList = require('../linkedList');

describe("Reverse Linked List", () => {
  test("Reverse normal list", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.reverse();
    expect(list.printList()).toEqual("Head -> 3 -> 2 -> 1 -> Null");
  });

  test("Reverse single node", () => {
    const list = new LinkedList();
    list.add(5);
    list.reverse();
    expect(list.printList()).toEqual("Head -> 5 -> Null");
  });

  test("Reverse empty list", () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.printList()).toEqual("Head -> Null");
  });

  test("Reverse list with duplicates", () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.reverse();
    expect(list.printList()).toEqual("Head -> 3 -> 2 -> 2 -> 1 -> Null");
  });
});
