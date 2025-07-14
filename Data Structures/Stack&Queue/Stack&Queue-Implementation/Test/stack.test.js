const Stack = require('../stack');

describe('Stack Implementation', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should start empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('should push a single item onto the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('should push multiple items and follow LIFO', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30); // Last pushed
  });

  test('should pop the top item and follow LIFO', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
    expect(stack.peek()).toBe(20);
  });

  test('should return a message when popping from an empty stack', () => {
    expect(stack.pop()).toBe("Cannot pop from an empty stack");
  });

  test('should return null when peeking into an empty stack', () => {
    expect(stack.peek()).toBe(null);
  });

  test('should be empty after popping all elements', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
