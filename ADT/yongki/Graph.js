var Graph = function () {
  this.vertexSize = 0;
  this.matrix = this._resizeGraph();
}

Graph.prototype._resizeGraph = function () {
  return Array(this.vertexSize).fill(Array(this.vertexSize));
}

Graph.prototype.insertVertex = function (vertex) {
  this.vertexSize += 1;
  this.matrix = this._resizeGraph();
  return;
}

Graph.prototype.insertEdge = function (vertexA, vertexB) {
  this.matrix[vertexA][vertexB] = 1;
  return;
}

module.exports = Graph;