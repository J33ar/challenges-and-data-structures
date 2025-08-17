const Stack = require("../Stack&Queue-Implementation/stack");

class StackWithDeleteMiddle extends Stack {

  // حذف العنصر الأوسط
  deleteMiddle() {
    if (this.isEmpty()) {
      return "Cannot delete from an empty stack";
    }

    if (this.top && !this.top.next) {
      // إذا في عنصر واحد فقط
      this.top = null;
      return;
    }

    // احسب حجم الستاك
    let size = 1;
    let current = this.top;
    while (current) {
      size++;
      current = current.next;
    }

    // حدد العنصر الأوسط
    let middleIndex = size % 2 === 0 ? Math.floor(size / 2) - 1 : Math.floor(size / 2);

    // ستاك مؤقت لتخزين العناصر حتى نصل للمنتصف
    const tempStack = new Stack();
    for (let i = 0; i < middleIndex; i++) {
      tempStack.push(this.pop());
    }

    // احذف العنصر الأوسط
    this.pop();

    // رجّع العناصر مرة ثانية بنفس الترتيب
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }
}

module.exports = StackWithDeleteMiddle;
