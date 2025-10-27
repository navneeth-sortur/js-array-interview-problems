/**
 * Find Maximum Number in an Array
 * ------------------------------------
 * Given an array of numbers, return the largest number.
 *
 * Example:
 * Input: [3, 7, 2, 9, 5]
 * Output: 9
 *
 * Approaches:
 * 1️⃣ Using Math.max() (Optimized)
 * 2️⃣ Using a loop (Alternate)
 */

/**
 * @param {number[]} arr - array of numbers
 * @returns {number} maximum number in the array
 */
function findMax(arr) {
  if (!arr.length) return undefined;
  return Math.max(...arr);
}

// Alternate brute-force approach
// function findMax(arr) {
//   if (!arr.length) return undefined;
//   let max = arr[0];
//   for (let num of arr) if (num > max) max = num;
//   return max;
// }

module.exports = { findMax };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */
