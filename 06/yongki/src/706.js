const util = require('util');

const MyHashMap = require('../src/adt/HashMap');

(function main() {
  const commands = ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"];
  const values = [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]];

  let hashMap;

  const result = commands.map((command, idx) => {
    const [key, value] = values[idx];

    switch (command) {
      case 'MyHashMap':
        hashMap = new MyHashMap();
        return null;
      case 'put':        
        return hashMap.put(key, value);
      case 'get':
        return hashMap.get(key);
      case 'remove':
        return hashMap.remove(key);
    }
  })

  console.log(util.inspect(hashMap, { showHidden: false, depth: null }));

  console.log(result);
})();