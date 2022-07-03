const STACK = new WeakMap();

export default class Stack {
  constructor() {
    STACK.set(this, {
      count: 0,
      data: {},
    });
  }

  isEmpty() {
    const stack = STACK.get(this);

    return stack.count === 0;
  }

  push(element) {
    const stack = STACK.get(this);

    stack.data[stack.count] = element;
    stack.count++;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }

    const stack = STACK.get(this);

    return stack.data[stack.count - 1];
  }

  size() {
    const stack = STACK.get(this);

    return stack.count;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const stack = STACK.get(this);

    stack.count--;

    const element = stack.data[stack.count];
    delete stack.data[stack.count];

    return element;
  }

  clear() {
    const stack = STACK.get(this);

    stack.count = 0;
    stack.data = {};
  }

  print() {
    let stackData = '';

    if (this.isEmpty()) {
      return stackData;
    }

    const stack = STACK.get(this);

    stackData = `${stack.data[0]}`;

    for (let i = 1; i < stack.count; i++) {
      stackData = `${stackData},${stack.data[i]}`;
    }

    return stackData;
  }
}
