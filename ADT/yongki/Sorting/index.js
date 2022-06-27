const {
  mergeSort,
  mergeSortLinkedList
} = require('./merge');

const {
  quickSortInPlace,
  quickSortNotInPlace,
} = require('./quick');

module.exports = {
  insertion: require('./insertion'),
  bubble: require('./bubble'),
  mergeSort,
  mergeSortLinkedList,
  selection: require('./selection'),
  quickSortInPlace,
  quickSortNotInPlace,
  heap: require('./heap')
};