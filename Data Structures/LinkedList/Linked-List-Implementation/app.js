const { log } = require("node:console");
const linkedList = require("./linkedList");

const list = new linkedList();

// list.add(1);
// list.add(2);
// list.add(3);
// list.printList();

// list.includes(3);
// list.includes(4);

// list.insertAt(4,3);
// list.insertAt(5,4);
// console.log("Inser data 4 in index 3 and data 5 in index 4:");
// list.printList();
// list.includes(4);
// list.printList();
// list.insertAt(6,10);
// console.log("Inser data 6 in index 10:");
// list.printList();
// console.log("Remove Value 5:");
// list.remove(5);
// list.printList();
// console.log("Remove Value 3:");
// list.remove(3);
// list.printList();
// console.log("Remove Value 1:");
// list.remove(1);
// list.printList();
// console.log("Remove Value 7:");
// list.remove(7);
// list.printList();

// // Original List: Head -> 1 -> 2 -> 3 -> 4 -> Null
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// console.log("Original List: ");
// list.printList();
// list.reverse();
// console.log("Reversed List: ");
// list.printList();
// // Reversed List: Head -> 4 -> 3 -> 2 -> 1 -> Null
// list.remove(1);
// list.remove(2);
// list.remove(3);
// list.remove(4);
// // Original List: Head -> 10 -> Null
// list.add(10);
// console.log("Original List: ");
// list.printList();
// list.reverse();
// console.log("Reversed List: ");
// list.printList();
// // Reversed List: Head -> 10 -> Null
// list.remove(10);
// // Original List: Head -> Null
// console.log("Original List: ");
// list.printList();
// list.reverse();
// console.log("Reversed List: ");
// list.printList();
// // Reversed List: Head -> Null
// // Original List: Head -> 1 -> 2 -> 2 -> 3 -> 4 -> Null
// console.log("Original List: ");
// list.add(1);
// list.add(2);
// list.add(2);
// list.add(3);
// list.add(4);
// list.printList();
// list.reverse();
// console.log("Reversed List: ");
// list.printList();
// // Reversed List: Head -> 4 -> 3 -> 2 -> 2 -> 1 -> Null

// const list1 = new linkedList();
// list1.add(1);
// list1.add(3);
// list1.add(5);
// list1.add(7);
// list1.add(9);

// const list2 = new linkedList();
// list2.add(2);
// list2.add(4);
// list2.add(6);
// list2.add(8);

// console.log("list 1 : ");
// list1.printList();
// console.log("list 2 : ");
// list2.printList();

// const merged = list.mergeSortedLists(list1,list2);
// console.log("merge Sorted Lists : ");
// merged.printList();

// Example 1: Normal rotate (k = 2)
// ==============================
console.log("Example 1: Rotate by 2");
list.add(4);
list.add(3);
list.add(2);
list.add(1); // Head -> 1 -> 2 -> 3 -> 4
console.log("Original List:");
list.printList();

list.rotateLeft(2);
console.log("Rotated List:");
list.printList();
console.log("\n");

list.clear();

// ==============================
// Example 2: Rotate by list length (k = 3)
// ==============================
console.log("Example 2: Rotate by full length (3)");
list.add(10);
list.add(20);
list.add(30); // Head -> 30 -> 20 -> 10
console.log("Original List:");
list.printList();

list.rotateLeft(3);
console.log("Rotated List:");
list.printList();
console.log("\n");

list.clear();

// ==============================
// Example 3: Rotate by 0
// ==============================
console.log("Example 3: Rotate by 0");
list.add(1);
list.add(2);
list.add(3); // Head -> 3 -> 2 -> 1
console.log("Original List:");
list.printList();

list.rotateLeft(0);
console.log("Rotated List:");
list.printList();
console.log("\n");

list.clear();

// ==============================
// Example 4: Rotate by > length (k = 5, length = 3)
// ==============================
console.log("Example 4: Rotate by 5 (length = 3)");
list.add(100);
list.add(200);
list.add(300); // Head -> 300 -> 200 -> 100
console.log("Original List:");
list.printList();

list.rotateLeft(5); // 5 % 3 = 2
console.log("Rotated List:");
list.printList();
console.log("\n");

list.clear();

// ==============================
// Example 5: Rotate with negative k (k = -2)
// ==============================
console.log("Example 5: Rotate with negative k (-2)");
list.add(20);
list.add(15);
list.add(10);
list.add(5); // Head -> 5 -> 10 -> 15 -> 20
console.log("Original List:");
list.printList();

list.rotateLeft(-2); // Right rotation
console.log("Rotated List:");
list.printList();
console.log("\n");

list.clear();

// ==============================
// Example 6: Empty list
// ==============================
console.log("Example 6: Rotate empty list");
console.log("Original List:");
list.printList();

list.rotateLeft(3);
console.log("Rotated List:");
list.printList();
console.log("\n");

list.clear();

// ==============================
// Example 7: Single-node list
// ==============================
console.log("Example 7: Rotate single-node list");
list.add(42);
console.log("Original List:");
list.printList();

list.rotateLeft(1);
console.log("Rotated List:");
list.printList();
console.log("\n");

list.clear();