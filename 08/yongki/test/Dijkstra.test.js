const util = require('util');

const { findShortestPath } = require('../../../ADT/yongki/Graph/Dijkstra');

(function main() {
  const vertexs = ['A', 'B', 'C', 'D', 'E'];
  const graph = {
    'A': [0, 4, 1, Infinity, Infinity],
    'B': [Infinity, 0, Infinity, Infinity, 4],
    'C': [Infinity, 2, 0, 4, Infinity],
    'D': [Infinity, Infinity, Infinity, 0, 4],
    'E': [Infinity, Infinity, Infinity, Infinity, 0]
  };  

  console.log(util.inspect(
    findShortestPath(vertexs, graph, 0, 4),
    { showHidden: false, depth: null }
  ));
})();