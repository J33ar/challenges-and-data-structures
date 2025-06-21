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

// Original List: Head -> 1 -> 2 -> 3 -> 4 -> Null
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log("Original List: ");
list.printList();
list.reverse();
console.log("Reversed List: ");
list.printList();
// Reversed List: Head -> 4 -> 3 -> 2 -> 1 -> Null
list.remove(1);
list.remove(2);
list.remove(3);
list.remove(4);
// Original List: Head -> 10 -> Null
list.add(10);
console.log("Original List: ");
list.printList();
list.reverse();
console.log("Reversed List: ");
list.printList();
// Reversed List: Head -> 10 -> Null
list.remove(10);
// Original List: Head -> Null
console.log("Original List: ");
list.printList();
list.reverse();
console.log("Reversed List: ");
list.printList();
// Reversed List: Head -> Null
// Original List: Head -> 1 -> 2 -> 2 -> 3 -> 4 -> Null
console.log("Original List: ");
list.add(1);
list.add(2);
list.add(2);
list.add(3);
list.add(4);
list.printList();
list.reverse();
console.log("Reversed List: ");
list.printList();
// Reversed List: Head -> 4 -> 3 -> 2 -> 2 -> 1 -> Null