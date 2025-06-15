const { log } = require("node:console");
const linkedList = require("./linkedList");

const list = new linkedList();

list.add(1);
list.add(2);
list.add(3);
list.printList();

list.includes(3);
list.includes(4);

list.insertAt(4,3);
list.insertAt(5,4);
console.log("Inser data 4 in index 3 and data 5 in index 4:");
list.printList();
list.includes(4);
list.printList();
list.insertAt(6,10);
console.log("Inser data 6 in index 10:");
list.printList();
console.log("Remove Value 5:");
list.remove(5);
list.printList();
console.log("Remove Value 3:");
list.remove(3);
list.printList();
console.log("Remove Value 1:");
list.remove(1);
list.printList();
console.log("Remove Value 7:");
list.remove(7);
list.printList();
