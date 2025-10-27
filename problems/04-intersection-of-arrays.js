/**
 * Intersection of Two Arrays
 * ------------------------------------
 * Given two arrays, return an array containing elements present in both.
 *
 * Example:
 * Input: [1, 2, 3, 4], [3, 4, 5, 6]
 * Output: [3, 4]
 *
 * Approaches:
 * 1️⃣ Using filter() + includes() (Simple and readable)
 * 2️⃣ Using Set for optimized lookup
 */

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]} intersection of arr1 and arr2
 */
function intersectionOfArrays(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}

// Alternate (simple):
// const intersectionOfArrays = (arr1, arr2) =>
//   arr1.filter(item => arr2.includes(item));

module.exports = { intersectionOfArrays };

/**
 * 🕒 Time Complexity: O(n + m)
 * 💾 Space Complexity: O(n)
 */
