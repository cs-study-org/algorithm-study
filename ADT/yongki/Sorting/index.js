const {
  quickSortRecursive,
  quickSortIterative, 
} = require('./quick');

module.exports = {
  insertion: require('./insertion'),
  bubble: require('./bubble'),
  merge: require('./merge'),
  selection: require('./selection'),
  quickSortRecursive,
  quickSortIterative,  
  heap: require('./heap')
};