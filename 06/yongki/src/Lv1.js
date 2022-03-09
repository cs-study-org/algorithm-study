const assert = require('assert');
const util = require('util');

const HashTable = require('./adt/HashTable');

/** 
 * @param {Array[string]} participant
 * @param {Array[string]} completion
 * @return {string}
 * 
 * a as participant
 * b as completion
 * 
 * time:    O(ab)
 *          → for          O(a)
 *            → contains   O(less than a)
 *          → for          O(b)
 *            → contains   O(less than b)
 * 
 * space:   O(ab)
 */
function solution(participant, completion) {
  const participantTable = new HashTable(participant.length);
  const completionTable = new HashTable(completion.length);

  for (const each of participant) {
    if (participantTable.contains(each))
      return each;

    participantTable.add(each);
  }

  for (const each of completion)
    completionTable.add(each);

  for (const each of participant) {
    if (!completionTable.contains(each))
      return each;
  }
}

(function main() {
  assert.equal(solution(
    ["leo", "kiki", "eden"],
    ["eden", "kiki"]),
    "leo"
  );
  assert.equal(solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]),
    "vinko"
  );
  assert.equal(solution(
    ["mislav", "stanko", "mislav", "ana"],
    ["stanko", "ana", "mislav"]),
    "mislav"
  );
})();