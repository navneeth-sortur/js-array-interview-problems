/**
 * Reverse Array Without Using .reverse()
 * ------------------------------------
 * Given an array, return a new array with elements in reverse order.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 *
 * Approaches:
 * 1️⃣ Using two-pointer method (Optimized)
 * 2️⃣ Using reduce() (Alternate)
 */

/**
 * @param {any[]} arr
 * @returns {any[]} reversed array
 */
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// Alternate:
// const reverseArray = arr => arr.reduce((acc, curr) => [curr, ...acc], []);

module.exports = { reverseArray };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
