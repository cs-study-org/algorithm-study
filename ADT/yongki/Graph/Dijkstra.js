/** 
 * @param {number[]} distances 
 * @param {boolean[]} visited 
 * @returns {number}
 */
function findShortestVertexIdx(distances, visited) {
  let shortest = undefined;
  let shortestDistance = Infinity;

  for (const [idx, distance] of distances.entries()) {
    const isShortest = !shortest || distance < shortestDistance;

    if (isShortest && !visited[idx]) {
      shortest = idx;
      shortestDistance = distance;
    }
  }

  return shortest;
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
  /**   
   * @param {string[]} parents 
   * @returns {string[]}
   * 
   * time:    O(n²)
   * space:   O(1)
   */
  function makePathBySrc(parents) {
    const pathBySrc = [vertexs[destIdx]];
    let parent = parents[destIdx];

    while (parent) {
      pathBySrc.push(parent);
      parent = parents[vertexs.indexOf(parent)];
    }
        
    return [...pathBySrc].reverse();
  }

  const vtxSize = vertexs.length;
  const src = vertexs[srcIdx];
  const distances = graph[src] || graph.adjacent(src);  
  const parents = new Array(vtxSize).fill(undefined);
  const visited = new Array(vtxSize).fill(false);

  visited[srcIdx] = true;

  for (const [neighborIdx, neighbor] of distances.entries()) {
    if (neighborIdx === srcIdx || !isFinite(neighbor))
      continue;
  
    parents[neighborIdx] = src;
  }
  let shortestIdx = findShortestVertexIdx(distances, visited);  

  while (vertexs[shortestIdx]) {    
    const shortestVtx = vertexs[shortestIdx];
    
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
    shortestIdx = findShortestVertexIdx(distances, visited);    
  }

  return {
    distance: distances[destIdx],
    path: makePathBySrc(parents)
  };
}

module.exports = { findShortestPath, findShortestVertexIdx };