const {
  mergeSort,
  mergeSortInplace
} = require('./merge');

const {
  quickSortInPlace,
  quickSortNotInPlace,
} = require('./quick');

module.exports = {
  insertion: require('./insertion'),
  bubble: require('./bubble'),
  mergeSort,
  mergeSortInplace,
  selection: require('./selection'),
  quickSortInPlace,
  quickSortNotInPlace,
  heap: require('./heap')
};