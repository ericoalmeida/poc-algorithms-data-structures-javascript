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
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }
}
