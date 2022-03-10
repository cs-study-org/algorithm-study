const assert = require('assert');
const util = require('util');

const HashTable = require('./adt/HashTable');

/** 
 * @param {Array[string]} phone_book
 * @return {boolean}
 * 
 * a as phone_book
 * b as phone
 * 
 * time:    O(ab)
 * space:   O(a)
 */
function solution(phone_book) {
  const table = new HashTable(phone_book.length);

  for (const phone of phone_book)
    table.add(phone);

  let min = phone_book[0];

  for (let i = 1; i < phone_book.length; i++)
    min = Math.min(min, phone_book[i]);

  for (const phone of phone_book) {
    for (let j = 1; j < phone.length; j++) {
      if (table.contains(phone.substring(0, j)))
        return false;
    }
  }

  return true;
}

(function main() {
  assert.equal(solution(
    ["119", "97674223", "1195524421"]),
    false
  );
  assert.equal(solution(
    ["123", "456", "789"]),
    true
  );
  assert.equal(solution(
    ["12", "123", "1235", "567", "88"]),
    false
  );
})();