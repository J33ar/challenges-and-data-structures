const LinkedList = require('./linkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('adds nodes to the end', () => {
    list.add(1);
    list.add(2);
    expect(list.printList()).toBe("Head -> 1 -> 2 -> Null");
  });

  test('removes node by value', () => {
    list.add(1);
    list.add(2);
    list.remove(1);
    expect(list.printList()).toBe("Head -> 2 -> Null");
  });

  test('checks if value exists', () => {
    list.add(1);
    list.add(3);
    expect(list.includes(3)).toBe(true);
    expect(list.includes(4)).toBe(false);
  });

  test('inserts node at specific index', () => {
    list.add(1);
    list.add(3);
    list.insertAt(2, 1);
    expect(list.printList()).toBe("Head -> 1 -> 2 -> 3 -> Null");
  });

  test('throws error on invalid insert index', () => {
    expect(() => list.insertAt(10, 1)).toThrow("Index out of bounds");
  });
});