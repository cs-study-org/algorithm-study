var AdjacencyMatrix = function (vertexs) {
  this.matrix = this._resizeGraph(vertexs)  
}

AdjacencyMatrix.prototype._resizeGraph = function (vertexs) {
  if (this.matrix && vertexs < this.matrix.size)
    return this.matrix;

  const map = new Map();

  for (let i = 0; i <= vertexs; i++) {
    map.set(i, []);

    for (let j = 0; j <= vertexs; j++)
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
AdjacencyMatrix.prototype.insertVertex = function (vertex) {
  this.matrix = this._resizeGraph(vertex);

  return;
}

/**
 * @param {number} vertexA
 * @param {number} vertexB
 * @param {boolean} undirected
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
AdjacencyMatrix.prototype.insertEdge = function (
  vertexA,
  vertexB,
  undirected = false
) {
  this.matrix.get(vertexA)[vertexB] = 1;

  if (undirected)
    this.matrix.get(vertexB)[vertexA] = 1;

  return;
}

/**
 * @param {number} vertex
 * @return {void}
 * 
 * time:    O(1)
 * space:   O(1)
 */
AdjacencyMatrix.prototype.deleteVertex = function (vertex) {
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
AdjacencyMatrix.prototype.deleteEdge = function (vertexA, vertexB) {
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
AdjacencyMatrix.prototype.adjacent = function (vertex) {
  return this.matrix.get(vertex);
}

module.exports = AdjacencyMatrix;