const SinglyLinkedList = require('../../../ADT/yongki/LinkedList/SinglyLinkedList');


var AdjacencyList = function () {
  this.list = [];
}

/**
 * @param {number} vertex
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(n)
 */
AdjacencyList.prototype.insertVertex = function (vertex) {
  this.list.push(new SinglyLinkedList(vertex));
  return;
}

/**
 * @param {number} vertexA
 * @param {number} vertexB
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
AdjacencyList.prototype.insertEdge = function (vertexA, vertexB) {
  const vertex = this.list[vertexA];
  vertex.insertFront(vertexB);
  return;
}

/**
 * @param {number} vertex
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
AdjacencyList.prototype.deleteVertex = function (vertex) {
  delete this.list[vertex];
  return;
}

/**
 * @param {number} vertexA
 * @param {number} vertexB
 * @return {void}
 * 
 * time:    O(n)
 * space:   O(1)
 */
AdjacencyList.prototype.deleteEdge = function (vertexA, vertexB) {
  const vertex = this.list[vertexA];
  vertex.delete(vertexB);
  return;
}

/**
 * @param {number} vertex
 * @return {Array[number]}
 * 
 * time:    O(n)
 * space:   O(1)
 */
AdjacencyList.prototype.adjacent = function (vertex) {
  const result = [];

  let cur = this.list[vertex].head;

  while (cur) {
    result.push(cur.value);
    cur = cur.next;
  }

  return result;
}

module.exports = AdjacencyList;