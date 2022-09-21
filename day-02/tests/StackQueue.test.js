const { Stack } = require('../Stack.js');
const { Queue } = require('../Queue.js');


describe('stacks', () => {
  it('stack add item to back', () => {
    const stack = new Stack();
    stack.push('train');
    expect(stack.peek()).toEqual('train');
  });
});

it('stack remove last item', () => {
  const stack = new Stack();
  stack.push('up');
  stack.push('dog');
  expect(stack.peek()).toEqual('dog');
  stack.pop();
  expect(stack.peek()).toEqual('up');
});

it('queue add item', () => {
  const queue = new Queue();
  queue.enqueue('brain');
  expect(queue.hasNext()).toEqual(true);
});

it('queue remove first item', () => {
  const queue = new Queue();
  queue.enqueue('brain');
  expect(queue.hasNext()).toEqual(true);
  queue.dequeue();
  expect(queue.hasNext()).toEqual(false);
});

describe('reverse', () => {
  it('reverse array', () => {
    const stack = new Stack([12, 3, 5, 7]);
    expect(stack.reverseStack()).toEqual([7, 5, 3, 12]);
  });
});
    













