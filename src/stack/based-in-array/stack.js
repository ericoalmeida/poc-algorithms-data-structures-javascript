export default class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }

    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    return this.items.pop();
  }

  clear() {
    this.items = [];
  }

  print() {
    return this.items.toString();
  }
}
