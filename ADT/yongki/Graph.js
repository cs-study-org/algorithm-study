var Graph = function () {
  this.matrix = this._resizeGraph();
}

Graph.prototype._resizeGraph = function (vertex) {
  const map = new Map();

  for (let i = 0; i <= vertex; i++) {
    map.set(i, []);

    for (let j = 0; j <= vertex; j++)
      map.get(i).push(0);
  }

  return map;
}

/**
 * @param {number} vertex
 * @return {void}
 * 
 * time:    O(n²)
 * space:   O(1)
 */
Graph.prototype.insertVertex = function (vertex) {
  this.matrix = this._resizeGraph(vertex);

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
Graph.prototype.insertEdge = function (vertexA, vertexB) {
  this.matrix.get(vertexA)[vertexB] = 1;
  return;
}

/**
 * @param {number} vertex
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
Graph.prototype.deleteVertex = function (vertex) {
  this.matrix.delete(vertex);
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
Graph.prototype.deleteEdge = function (vertexA, vertexB) {
  this.matrix.get(vertexA)[vertexB] = 0;
  return;
}

/**
 * @param {number} vertex
 * @return {Array[number]}
 * 
 * time:    O(1)
 * space:   O(1)
 */
Graph.prototype.adjacent = function (vertex) {
  return this.matrix.get(vertex);
}

module.exports = Graph;