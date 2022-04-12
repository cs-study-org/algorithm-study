const util = require('util');


function makePathBySrc(parents, vertexs, destIdx) {
  const pathBySrc = [vertexs[destIdx]];
  let parent = parents[destIdx];

  while (parent) {
    pathBySrc.push(parent);
    parent = parents[vertexs.indexOf(parent)];
  }
      
  return [...pathBySrc].reverse();
}

/** 
 * @param {number[]} distances 
 * @param {boolean[]} visited 
 * @returns {number}
 */
function findShortestVertexIdx(distances, visited) {
  let shortestIdx = undefined;
  let shortestDistance = Infinity;

  for (const [idx, distance] of distances.entries()) {
    const isShortest = !shortestIdx || distance < shortestDistance;

    if (isShortest && !visited[idx]) {
      shortestIdx = idx;
      shortestDistance = distance;
    }
  }
  return shortestIdx;
}

/** 
 * @param {string[]} vertexs 
 * @param {number[][]} graph 
 * @param {number} srcIdx 
 * @param {number} destIdx 
 * @returns {Object}
 * 
 * time:    O(n²)
 * space:   O(n)
 */
function findShortestPath(vertexs, graph, srcIdx, destIdx) {  
  const src = vertexs[srcIdx];
  const distances = graph[src] || graph.adjacent(src);  
  const parents = new Array(vertexs.length).fill(undefined);
  const visited = new Array(vertexs.length).fill(false);

  visited[srcIdx] = true;

  for (const [neighborIdx, neighbor] of distances.entries()) {
    if (neighborIdx === srcIdx || !isFinite(neighbor))
      continue;
  
    parents[neighborIdx] = src;
  }  

  let shortestIdx = srcIdx;

  while (shortestIdx !== destIdx) {
    shortestIdx = findShortestVertexIdx(distances, visited);
    const shortestVtx = vertexs[shortestIdx];

    console.log("SHORTEST:", util.inspect(shortestVtx, { showHidden: false, depth: null }))
    console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }))
    console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }))
    console.log("VISITED:", util.inspect(visited, { showHidden: false, depth: null }))    
    
    visited[shortestIdx] = true;

    const distance = distances[shortestIdx];
    const neighbors = graph[shortestVtx] || graph.adjacent(shortestVtx);

    for (const [neighborIdx, neighbor] of neighbors.entries()) {
      if (neighborIdx === srcIdx || !isFinite(neighbor))
        continue;

      const newDistance = distance + neighbor;

      if (!visited[neighborIdx] && distances[neighborIdx] > newDistance) {
        distances[neighborIdx] = newDistance
        parents[neighborIdx] = shortestVtx;
      }
    }
  }

  return {
    distance: distances[destIdx],
    path: makePathBySrc(parents, vertexs, destIdx)
  };
}

module.exports = { findShortestPath, findShortestVertexIdx };