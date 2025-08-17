const Queue = require('../queue');


describe('Queue Implementation', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should start empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('should enqueue a single item', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.isEmpty()).toBe(false);
  });

  test('should enqueue multiple items and maintain FIFO', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  test('should dequeue the front item', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(20);    
  });

  test('should return message when dequeuing from empty queue', () => {
    expect(queue.dequeue()).toBe("Cannot dequeue from an empty queue");
  });

  test('should return null when peeking into empty queue', () => {
    expect(queue.peek()).toBe(null);
  });

  test('should be empty after dequeuing all elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
