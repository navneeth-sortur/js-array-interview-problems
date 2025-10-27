/**
 * Chunk Array into Smaller Arrays
 * ------------------------------------
 * Given an array and a chunk size, split the array into groups of that size.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5], size = 2
 * Output: [[1, 2], [3, 4], [5]]
 *
 * Approaches:
 * 1️⃣ Using for loop with slice() (Optimized)
 * 2️⃣ Using reduce() (Alternate)
 */

/**
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]} chunked array
 */
function chunkArray(arr, size) {
  if (size <= 0) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Alternate using reduce():
// const chunkArray = (arr, size) =>
//   arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);

module.exports = { chunkArray };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
