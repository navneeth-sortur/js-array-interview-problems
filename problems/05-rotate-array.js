/**
 * Rotate Array by K Positions
 * ------------------------------------
 * Given an array, rotate its elements to the right by k steps.
 *
 * Example:
 * Input: arr = [1, 2, 3, 4, 5], k = 2
 * Output: [4, 5, 1, 2, 3]
 *
 * Approaches:
 * 1️⃣ Using slice() and concat() (Optimized)
 * 2️⃣ Using reverse-based approach (Alternate)
 */

/**
 * @param {any[]} arr
 * @param {number} k
 * @returns {any[]} rotated array
 */
function rotateArray(arr, k) {
  if (!arr.length) return [];
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// Alternate reverse method:
// function rotateArray(arr, k) {
//   k = k % arr.length;
//   return [...arr].reverse()
//     .slice(0, k).reverse()
//     .concat([...arr].reverse().slice(k).reverse());
// }

module.exports = { rotateArray };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
