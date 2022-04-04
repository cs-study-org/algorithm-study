const util = require('util');


function findShortestNode(distances, visited) {
  let shortest = undefined;

  for (let vertex in distances){
    let isShortest = !shortest || distances[vertex] < distances[shortest];    

    if(isShortest && !visited.has(vertex))
      shortest = vertex;
  }

  return shortest;
}

function findShortestPath(graph, source, destination) {
  // +++ Track distance
  let distances = {};
  distances[destination] = Infinity;

  distances = Object.assign(distances, graph[source]);
  console.log("DISTANCES:", util.inspect(distances, { showHidden: false, depth: null }));

  // +++ Track parent
  let parents = {};
  parents[destination] = undefined;

  for (let child in graph[source])
    parents[child] = source;

  console.log("PARENTS:", util.inspect(parents, { showHidden: false, depth: null }));

  // +++ Track visited
  const visited = new Set();
  let shortest = findShortestNode(distances, visited);

  console.log("SHORTEST:", util.inspect(shortest, { showHidden: false, depth: null }));

  while(shortest){
    let distance = distances[shortest];
    let children = graph[shortest];

    for(let child in children){
      if(child === source)
        continue;
      else{
        let newDistance = distance + children[child];

        if(!distances[child] || distances[child]  > newDistance){
          distances[child] = newDistance;
          parents[child] = shortest;
        }
      }
    }

    visited.add(shortest);
    shortest = findShortestNode(distance, visited);
    console.log("SHORTEST:", util.inspect(shortest, { showHidden: false, depth: null }));
  }
}

(function main() {
  const graph = {
    'A': { 'B': 4, 'C': 1 },
    'B': { 'E': 4 },
    'C': { 'B': 2, 'D': 4 },
    'D': { 'E': 4 },
    'E': {}
  };    

  findShortestPath(graph, 'A', 'E');
})();