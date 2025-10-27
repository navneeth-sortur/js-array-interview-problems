/**
 * Remove Duplicates from Array
 * ------------------------------------
 * Given an array of numbers, return a new array with duplicates removed.
 *
 * Example:
 * Input: [1, 2, 2, 3, 4, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 *
 * Approaches:
 * 1️⃣ Using Set (Optimized)
 * 2️⃣ Using filter() + indexOf() (Alternate)
 */

/**
 * @param {any[]} arr
 * @returns {any[]} array with duplicates removed
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Alternate:
// const removeDuplicates = arr => arr.filter((v, i) => arr.indexOf(v) === i);

module.exports = { removeDuplicates };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
