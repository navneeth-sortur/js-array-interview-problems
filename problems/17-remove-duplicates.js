/**
 * Remove Duplicates from Array
 * -----------------------------
 * Given an array, return a new array with unique elements only.
 *
 * Example:
 * Input: [1, 2, 2, 3, 4, 4]
 * Output: [1, 2, 3, 4]
 *
 * Approaches:
 * 1️⃣ Using Set (Optimal)
 * 2️⃣ Using reduce() (Alternative)
 */

/**
 * @param {any[]} arr
 * @returns {any[]} unique elements
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Alternate:
// const removeDuplicates = (arr) =>
//   arr.reduce((acc, val) => (acc.includes(val) ? acc : [...acc, val]), []);

module.exports = { removeDuplicates };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
