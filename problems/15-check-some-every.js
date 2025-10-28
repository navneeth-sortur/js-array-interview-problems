/**
 * Check if All / Some Elements Satisfy Condition
 * -----------------------------------------------
 * Given an array and a condition, return an object with two booleans:
 * - all: true if all elements satisfy the condition
 * - some: true if at least one element satisfies the condition
 *
 * Example:
 * Input: [1,2,3,4], callback: x => x > 2
 * Output: { all: false, some: true }
 *
 * Approach: Use every() and some()
 */

/**
 * @param {any[]} arr
 * @param {(val:any)=>boolean} callback
 * @returns {{ all:boolean, some:boolean }}
 */
function checkSomeEvery(arr, callback) {
  return {
    all: arr.every(callback),
    some: arr.some(callback)
  };
}

module.exports = { checkSomeEvery };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */
