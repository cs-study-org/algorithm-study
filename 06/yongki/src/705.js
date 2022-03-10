const util = require('util');

const MyHashSet = require('../src/adt/HashSet');

(function main() {
  const commands = ["MyHashSet","add","add","contains","contains","add","contains","remove","contains"];
  const values = [[],[1],[2],[1],[3],[2],[2],[2],[2]];

  let hashSet;

  const result = commands.map((command, idx) => {
    const value = values[idx][0];    

    switch(command){
      case 'MyHashSet':
        hashSet = new MyHashSet();
        return null;
      case 'add':
        return hashSet.add(value);        
      case 'contains':
        return hashSet.contains(value);
      case 'remove':        
        return hashSet.remove(value);
    }    
  })

  console.log(util.inspect(hashSet, { showHidden: false, depth: null }));
  console.log(result);
})();