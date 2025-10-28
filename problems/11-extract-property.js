/**
 * Extract Specific Property from Array of Objects
 * ------------------------------------------------
 * Given an array of objects and a key, return an array containing the value
 * of that key from each object.
 *
 * Example:
 * Input: [{ name: "Alice" }, { name: "Bob" }], key: "name"
 * Output: ["Alice", "Bob"]
 *
 * Approach: Use map()
 */

/**
 * @param {Object[]} arr
 * @param {string} key
 * @returns {any[]} array of property values
 */
function extractProperty(arr, key) {
  return arr.map(obj => obj[key]);
}

module.exports = { extractProperty };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
