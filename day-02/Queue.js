class Queue {
  #list = [];
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  enqueue(item) {
    this.#list.push(item);
  }

  hasNext() {
    return this.#list.length ? true : false;
  }

  dequeue() {
    this.#list = this.#list.slice(1);
  }









}











module.exports = { Queue };
