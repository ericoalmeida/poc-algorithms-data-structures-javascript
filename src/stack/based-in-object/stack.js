export default class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  isEmpty() {
    return this.count === 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }

    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    this.count--;

    const element = this.items[this.count];
    delete this.items[this.count];

    return element;
  }
}
