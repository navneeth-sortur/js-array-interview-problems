/**
 * Find Second Largest Element in Array
 * ------------------------------------
 * Given an array of numbers, return the second largest unique number.
 *
 * Example:
 * Input: [10, 5, 8, 12, 12]
 * Output: 10
 *
 * Approaches:
 * 1️⃣ Using sorting (Simple)
 * 2️⃣ Using single-pass iteration (Optimized)
 */

/**
 * @param {number[]} arr
 * @returns {number | undefined} second largest number
 */
function secondLargest(arr) {
  const unique = Array.from(new Set(arr));
  if (unique.length < 2) return undefined;
  unique.sort((a, b) => b - a);
  return unique[1];
}

// Optimized single-pass approach:
// function secondLargest(arr) {
//   let first = -Infinity, second = -Infinity;
//   for (const num of arr) {
//     if (num > first) [first, second] = [num, first];
//     else if (num > second && num < first) second = num;
//   }
//   return second === -Infinity ? undefined : second;
// }

module.exports = { secondLargest };

/**
 * 🕒 Time Complexity: O(n log n)
 * 💾 Space Complexity: O(n)
 */
