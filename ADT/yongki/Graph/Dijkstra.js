/** 
 * @param {number[]} distances 
 * @param {boolean[]} visited 
 * @returns {number}
 */
function findShortestVertexIdx(distances, visited) {
  let shortest = undefined;
  let shortestDistance = 0;

  for (let i = 0; i < distances.length; i++) {
    const isShortest = !shortest || distances[i] < shortestDistance;

    if (isShortest && !visited[i]) {
      shortest = i;
      shortestDistance = distances[i];
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

    pathBySrc.push(vertexs[srcIdx]);
    return [...pathBySrc].reverse();
  }

  const vtxSize = vertexs.length;
  const src = vertexs[srcIdx];
  const distances = graph[src];
  const parents = new Array(vtxSize).fill(undefined);
  const visited = new Array(vtxSize).fill(false);

  parents[srcIdx] = src;
  visited[srcIdx] = true;

  let shortestIdx = findShortestVertexIdx(distances, visited);

  while (vertexs[shortestIdx]) {
    const shortestVtx = vertexs[shortestIdx];

    visited[shortestIdx] = true;

    const distance = distances[shortestIdx];
    const neighbors = graph[shortestVtx];

    for (let neighborIdx = 0; neighborIdx < vtxSize; neighborIdx++) {
      const neighbor = neighbors[neighborIdx];

      if (neighborIdx === srcIdx)
        continue;

      if (neighbor === Infinity)
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

module.exports = findShortestPath;