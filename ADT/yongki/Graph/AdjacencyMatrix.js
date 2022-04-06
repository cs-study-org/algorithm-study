var AdjacencyMatrix = function (vertexs, startWith) {
  this.matrix = this._resizeGraph(vertexs, startWith)
}

AdjacencyMatrix.prototype._resizeGraph = function (
  vertexs,
  startWith = 0
) {
  if (this.matrix && vertexs < this.matrix.size)
    return this.matrix;

  const map = new Map();
  const lastIdx = startWith ? vertexs : vertexs - 1;

  for (let i = startWith; i <= lastIdx; i++) {
    map.set(i, []);

    for (let j = startWith; j <= lastIdx; j++)
      i === j ? map.get(i).push(0): map.get(i).push(Infinity);
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

AdjacencyMatrix.prototype.insertAdjacnetVertex = function (
  vertexA,
  vertexB,
  undirected = false
) {

  if (this.matrix.has(vertexA))
    this.matrix.get(vertexA).push(vertexB);
  else
    this.matrix.set(vertexA, [vertexB]);

  if (undirected) {
    if (this.matrix.has(vertexB))
      this.matrix.get(vertexB).push(vertexA);
    else
      this.matrix.set(vertexB, [vertexA]);
  }
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
  weight = 1,
  undirected = false
) {
  this.matrix.get(vertexA)[vertexB] = weight;

  if (undirected)
    this.matrix.get(vertexB)[vertexA] = weight;

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