/**
 * Filter Objects Based on Condition
 * ---------------------------------
 * Given an array of objects and a condition callback,
 * return only those objects that satisfy the condition.
 *
 * Example:
 * Input: [{age:20},{age:25},{age:30}], callback: obj => obj.age > 21
 * Output: [{age:25},{age:30}]
 */

/**
 * @param {Object[]} arr
 * @param {(obj:Object)=>boolean} callback
 * @returns {Object[]} filtered objects
 */
function filterByCondition(arr, callback) {
  return arr.filter(callback);
}

module.exports = { filterByCondition };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
