const Stack = require("./stack");
const Queue = require ("./queue");
const stack = new Stack();
const queue = new Queue();

//Queue
console.log("Is queue empty?", queue.isEmpty()); // ✅ true

// تجربة dequeue من كيو فاضي
console.log("Dequeue from empty queue:", queue.dequeue()); // ❌ "Cannot dequeue from an empty queue"

// تجربة peek من كيو فاضي
console.log("Peek from empty queue:", queue.peek()); // ❌ null

// ✅ Enqueue عناصر
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.printQueue(); // 👉 Queue - Front 10 -> 20 -> 30 Null

// ✅ Peek
console.log("Peek:", queue.peek()); // 10

// ✅ Dequeue أول عنصر
console.log("Dequeued:", queue.dequeue()); // 10
queue.printQueue(); // 👉 Queue - Front 20 -> 30 Null

// ✅ Dequeue الثاني
console.log("Dequeued:", queue.dequeue()); // 20
queue.printQueue(); // 👉 Queue - Front 30 Null

// ✅ Dequeue الثالث
console.log("Dequeued:", queue.dequeue()); // 30
queue.printQueue(); // 👉 Queue - Front Null

// ✅ الآن الكيو فاضي
console.log("Is queue empty?", queue.isEmpty()); // ✅ true

// تجربة dequeue بعد تفريغ الكيو
console.log("Dequeue again:", queue.dequeue()); // ❌ "Cannot dequeue from an empty queue"
console.log('========================================================================================'); 
//Stack
// ✅ هل الستاك فاضي؟
console.log("Is stack empty?", stack.isEmpty()); // true

// ❌ تجربة pop من ستاك فاضي
console.log("Pop from empty stack:", stack.pop()); // "Cannot pop from an empty stack"

// ❌ تجربة peek من ستاك فاضي
console.log("Peek from empty stack:", stack.peek()); // null

// ✅ Push عناصر
stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack(); // 👉 Stack - Top 30 -> 20 -> 10 Null

// ✅ Peek
console.log("Peek:", stack.peek()); // 30

// ✅ Pop العنصر الأعلى
console.log("Popped:", stack.pop()); // 30
stack.printStack(); // 👉 Stack - Top 20 -> 10 Null

// ✅ Pop الثاني
console.log("Popped:", stack.pop()); // 20
stack.printStack(); // 👉 Stack - Top 10 Null

// ✅ Pop الثالث
console.log("Popped:", stack.pop()); // 10
stack.printStack(); // 👉 Stack - Top Null

// ✅ الآن الستاك فاضي
console.log("Is stack empty?", stack.isEmpty()); // true

// ❌ Pop بعد ما صار فاضي
console.log("Pop again:", stack.pop()); // "Cannot pop from an empty stack"