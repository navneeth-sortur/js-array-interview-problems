/**
 * Sort Array of Objects by Key
 * -----------------------------
 * Given an array of objects and a key, return a new array sorted by that key.
 *
 * Example:
 * Input: [{age:30},{age:20},{age:40}], key: "age"
 * Output: [{age:20},{age:30},{age:40}]
 *
 * Approach: Use sort() with compare function
 */

/**
 * @param {Object[]} arr
 * @param {string} key
 * @param {boolean} [descending=false]
 * @returns {Object[]} sorted array
 */
function sortByKey(arr, key, descending = false) {
  return [...arr].sort((a, b) =>
    descending ? b[key] - a[key] : a[key] - b[key]
  );
}

module.exports = { sortByKey };

/**
 * 🕒 Time Complexity: O(n log n)
 * 💾 Space Complexity: O(n)
 */
