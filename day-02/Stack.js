class Stack {
  #list = [];
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }
  push(item) {
    this.#list.push(item);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  pop() {
    return this.#list.pop();
  }


  reverseStack() {
    return this.#list.reverse();
  }

}
module.exports = { Stack };









