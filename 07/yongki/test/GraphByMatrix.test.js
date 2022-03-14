const util = require('util');

const Graph = require('../../../ADT/yongki/Graph');


(function main() {
  const graph = new Graph();

  for (let i = 0; i <= 4; i++)
    graph.insertVertex(i);  
  
  graph.deleteVertex(1);

  graph.insertEdge(0, 4);
  graph.insertEdge(4, 2);
  graph.insertEdge(2, 4);
  graph.insertEdge(2, 0);
  graph.insertEdge(2, 3);
  
  console.log(util.inspect(graph, { showHidden: false, depth: null }));
})();