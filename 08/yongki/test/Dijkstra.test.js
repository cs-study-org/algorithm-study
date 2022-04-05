const util = require('util');


function findShortestVertexIdx(distances, visited) {
  let shortest = undefined;
  let shortestDistance = 0;

  for (let i = 0; i < distances.length; i++) {
    const isShortest = !shortest || distances[i] < shortestDistance;

    if (isShortest && !visited[i]){
      shortest = i;
      shortestDistance = distances[i];
    }
  }

  return shortest;
}

function findShortestPath(vertexs, graph, srcIdx, destIdx) {
  const vtxSize = vertexs.length;
  const src = vertexs[srcIdx];
  const distances = graph[src];
  const paths = new Array(vtxSize).fill(undefined);
  const visited = new Array(vtxSize).fill(false);
  
  paths[srcIdx] = src;
  visited[srcIdx] = true;  

  console.log("distances:", util.inspect(distances, { showHidden: false, depth: null }));

  while(true){        
    const shortestIdx = findShortestVertexIdx(distances, visited);
    const shortestVtx = vertexs[shortestIdx];

    if(shortestIdx === destIdx)
      break;
  
    visited[shortestIdx] = true;
    console.log("shortest:", util.inspect(shortestVtx, { showHidden: false, depth: null }));    

    const distance = distances[shortestIdx];
    const neighbors = graph[shortestVtx];    

    for (let neighborIdx = 0; neighborIdx < vtxSize; neighborIdx++) {
      if(neighborIdx === srcIdx)
        continue;

      const newDistance = distance + neighbors[neighborIdx];

      if (!visited[neighborIdx] && distances[neighborIdx] > newDistance) {
        distances[neighborIdx] = newDistance
        paths[neighborIdx] = shortestVtx;
      }
    }        
  }  

  return {
    distance: distances[destIdx],
    path: paths
  };
}

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