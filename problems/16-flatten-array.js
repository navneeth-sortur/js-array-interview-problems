/**
 * Flatten a Nested Array
 * ------------------------
 * Given a nested array, flatten it into a single-level array.
 *
 * Example:
 * Input: [1, [2, [3, 4], 5]]
 * Output: [1, 2, 3, 4, 5]
 *
 * Approaches:
 * 1️⃣ Recursive with reduce() (Preferred)
 * 2️⃣ Using flat(Infinity)
 */

/**
 * @param {any[]} arr
 * @returns {any[]} flattened array
 */
function flattenArray(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    []
  );
}

module.exports = { flattenArray };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
