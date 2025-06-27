const Linkedlist = require('../linkedList');

describe('mergeSortedLists()', () => {
  test('Merges two sorted linked lists into a single sorted list', () => {
    const list1 = new Linkedlist();
    list1.add(1);
    list1.add(3);
    list1.add(5);

    const list2 = new Linkedlist();
    list2.add(2);
    list2.add(4);
    list2.add(6);

    const merged = list1.mergeSortedLists(list1, list2);
    const result = merged.printList();

    expect(result).toBe('Head -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> Null');
  });

  test('Merges one empty list and one non-empty list', () => {
    const list1 = new Linkedlist(); // empty

    const list2 = new Linkedlist();
    list2.add(2);
    list2.add(4);
    list2.add(6);

    const merged = list1.mergeSortedLists(list1, list2);
    const result = merged.printList();

    expect(result).toBe('Head -> 2 -> 4 -> 6 -> Null');
  });

  test('Merges two empty lists', () => {
    const list1 = new Linkedlist(); // empty
    const list2 = new Linkedlist(); // empty

    const merged = list1.mergeSortedLists(list1, list2);
    const result = merged.printList();

    expect(result).toBe('Head -> Null');
  });

  test('Merges List1: 5 -> 10 -> 15 and List2: 2 -> 3 -> 20', () => {
    const list1 = new Linkedlist();
    list1.add(5);
    list1.add(10);
    list1.add(15);

    const list2 = new Linkedlist();
    list2.add(2);
    list2.add(3);
    list2.add(20);

    const merged = list1.mergeSortedLists(list1, list2);
    const result = merged.printList();

    expect(result).toBe('Head -> 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> Null');
  });
});
