const util = require('util');

const AdjacencyList = require('../../../ADT/yongki/Graph/AdjacencyList');


(function main() {
  const graph = new AdjacencyList();

  for (let i = 0; i <= 4; i++)
    graph.insertVertex(i);

  graph.deleteVertex(1);

  graph.insertEdge(0, 4);
  graph.insertEdge(4, 2);
  graph.insertEdge(2, 4);
  graph.insertEdge(2, 0);
  graph.insertEdge(2, 3);

  graph.deleteEdge(2, 4);

  console.log(util.inspect(graph, { showHidden: false, depth: null }));
  console.log(util.inspect(graph.adjacent(2), { showHidden: false, depth: null }));
})();