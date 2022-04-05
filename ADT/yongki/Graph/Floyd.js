const util = require('util');

/** 
 * @param {string[]} vertexs 
 * @param {number[][]} graph 
 * @param {number} srcIdx 
 * @param {number} destIdx 
 * @returns {number}
 */
function findShortestPath(vertexs, graph, srcIdx, destIdx) {
  const vtxSize = vertexs.length;
  const result = Object.assign({}, graph);

  for (let vtxIdx = 0; vtxIdx < vtxSize; vtxIdx++) {
    for (let i = 0; i < vtxSize; i++) {
      for (let j = 0; j < vtxSize; j++) {
        const curShortest = result[vertexs[i]][j];
        const pathKnown = result[vertexs[i]][vtxIdx];
        const pathNew = result[vertexs[vtxIdx]][j];

        if (pathKnown + pathNew < curShortest)
          result[vertexs[i]][j] = pathKnown + pathNew;
      }
    }
  }
  console.log(util.inspect(result, { showHidden: false, depth: null }));

  return result[vertexs[srcIdx]][destIdx];
}

module.exports = findShortestPath;