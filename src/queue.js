const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list = new ListNode();

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value, node = this.list) {
    if (!node.value) {
      node.value = value;
      return;
    }

    if (!node.next) {
      node.next = {
        value: value,
        next: null
      }
      return;
    }

    this.enqueue(value, node.next);
  }

  dequeue() {
    const node = this.list.value;
    this.list.value = this.list.next.value;
    this.list.next = this.list.next.next;
    return node;
  }
}

module.exports = {
  Queue
};
