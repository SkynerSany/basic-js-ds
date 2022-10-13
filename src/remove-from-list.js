const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  if (!list.next) return;
  if (list.next.value === k) { 
    if (!list.next.next) {
      list.next = null;
      return;
    };
  }

  if (list.value === k) {
    check(list, k);
  }

  if (list.next) removeKFromList(list.next, k);

  return list;
}

function check(list, k) {
  if (list.value === k) {
    list.value = list.next.value;
    list.next = list.next.next;
    
    check(list, k)
  }

}

module.exports = {
  removeKFromList
};
