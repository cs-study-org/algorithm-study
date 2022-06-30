const SinglyLinkedList = require('../LinkedList/SinglyLinkedList');

SinglyLinkedList.prototype.getMiddle = function (head) {
  if (!head)
    return head;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

SinglyLinkedList.prototype.merge = function (left, right) {
  let result = null;

  if (!left)
    return right;

  if (!right)
    return left;

  if (left.value <= right.value) {
    result = left;
    result.next = this.merge(left.next, right);
  } else {
    result = right;
    result.next = this.merge(left, right.next);
  }

  return result;
}

SinglyLinkedList.prototype.mergeSort = function (head) {
  if (!head || !head.next)
    return head;

  let middle = this.getMiddle(head);  
  let middleNext = middle.next;
  middle.next = null;

  let left = this.mergeSort(head);
  let right = this.mergeSort(middleNext);  

  return this.merge(left, right);
}

function mergeSortLinkedList(input) {
  const list = new SinglyLinkedList();
  const result = [];

  for (const num of input)
    list.insertLast(num);  

  let sortedlink = list.mergeSort(list.head);

  while (sortedlink) {
    result.push(sortedlink.value);
    sortedlink = sortedlink.next;
  }

  return result;
}

function merge(leftList, rightList) {
  const result = [];

  while (leftList.length && rightList.length) {
    if (leftList[0] <= rightList[0])
      result.push(leftList.shift());
    else
      result.push(rightList.shift());
  }

  return [...result, ...leftList, ...rightList];
}

function mergeSort(input) {
  const N = input.length;

  if (N === 1)
    return input;

  const mid = Math.floor(N / 2);

  const leftList = input.slice(0, mid);
  const rightList = input.slice(mid);

  return merge(mergeSort(leftList), mergeSort(rightList));
}

module.exports = {
  mergeSort,
  mergeSortLinkedList
};