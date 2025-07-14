const Node = require("./node");

class Queue {
  constructor() {
    this.front = null; // Points to the front of the queue
    this.rear = null;  // Points to the rear of the queue
  }

  //  Check if the queue is empty
  isEmpty() {
    return this.front === null;
  }

  // Enqueue: Add a node to the rear of the queue
  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // Dequeue: Remove and return the front node
  dequeue() {
    if (this.isEmpty()) {
      return "Cannot dequeue from an empty queue";
    }

    const dequeued = this.front.data;
    this.front = this.front.next;

    // If the queue becomes empty, reset rear to null
    if (!this.front) {
      this.rear = null;
    }

    return dequeued;
  }

  // Peek: Return the front node without removing it
  peek() {
    return this.isEmpty() ? null : this.front.data;
  }

  // Print all elements in the queue
  printQueue() {
    let current = this.front;
    const result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    console.log("Queue - Front", result.join(" -> "), "Null");
  }
}

module.exports = Queue;
