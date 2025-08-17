# Delete Middle Element of a Stack

## Problem Domain  

Implement a method `deleteMiddle()` to remove the middle element of a stack while maintaining the order of other elements.  

- If the stack size is **odd** → remove the middle element (index = size / 2).  
- If the stack size is **even** → remove the **lower middle element** (index = size / 2 - 1).  
- Handle edge cases like:  
  - **Empty stack** → return `"Cannot delete from an empty stack"`.  
  - **Stack with one element** → becomes empty after deletion.

---

### Whiteboard Images

![Stack](./docs/whiteboard-delmid.png)

---

### Sample Output

> Delete Middle Element of a Stack
![Stack](./docs/delmid.png)

---

### Test Results

> deleteMiddleStack.test.js 
![Stack Test](./docs/test-delmid.png)

---

### How to Run

```bash
npm install
npx jest
```