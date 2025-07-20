const StackWithDeleteMiddle = require("./deleteMiddleStack");

describe("StackWithDeleteMiddle Tests", () => {
  let stack;

  beforeEach(() => {
    stack = new StackWithDeleteMiddle();
  });

  test("Delete middle from odd number of elements", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5); // Top -> 5 -> 4 -> 3 -> 2 -> 1

    stack.deleteMiddle(); // يجب حذف 3
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  test("Delete middle from even number of elements (lower middle)", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4); // Top -> 4 -> 3 -> 2 -> 1

    stack.deleteMiddle(); // يجب حذف 2 (lower middle)
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(1);
  });

  test("Delete from empty stack", () => {
    expect(stack.deleteMiddle()).toBe("Cannot delete from an empty stack");
  });

  test("Delete from stack with one element", () => {
    stack.push(10);
    stack.deleteMiddle();
    expect(stack.isEmpty()).toBe(true);
  });
});
