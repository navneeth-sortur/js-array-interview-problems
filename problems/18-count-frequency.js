/**
 * Count Frequency of Elements
 * ----------------------------
 * Given an array, return an object with element frequencies.
 *
 * Example:
 * Input: ["apple", "banana", "apple"]
 * Output: { apple: 2, banana: 1 }
 *
 * Approach: Use reduce()
 */

/**
 * @param {any[]} arr
 * @returns {Object} element frequencies
 */
function countFrequency(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

module.exports = { countFrequency };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
