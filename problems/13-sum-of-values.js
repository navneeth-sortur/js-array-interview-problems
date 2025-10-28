/**
 * Sum Values in Array of Objects
 * -------------------------------
 * Given an array of objects and a key, return the sum of all values
 * corresponding to that key.
 *
 * Example:
 * Input: [{price:10},{price:20},{price:30}], key: "price"
 * Output: 60
 *
 * Approach: Use reduce()
 */

/**
 * @param {Object[]} arr
 * @param {string} key
 * @returns {number} sum of all numeric values for the given key
 */
function sumOfValues(arr, key) {
  return arr.reduce((sum, obj) => sum + (obj[key] || 0), 0);
}

module.exports = { sumOfValues };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */
