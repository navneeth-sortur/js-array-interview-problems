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
 * 1 Iterative using stack (most optimized)
 * 2 Recursive with reduce() (cleaner version)
 * 3 Basic Recursive
 */

/**
 * @param {any[]} arr
 * @returns {any[]} flattened array
 */
function flattenArray(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse(); // because stack reverses order
}

// function flattenReduce(arr) {
//   return arr.reduce(
//     (acc, val) => acc.concat(Array.isArray(val) ? flattenReduce(val) : val),
//     []
//   );
// }

// console.log(flattenReduce([1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9]));

// function flattenRecursive(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenRecursive(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(flattenRecursive([1, 2, 3, [4, 5, 6, [7, 8, [10, 11]]], 9]));

module.exports = { flattenArray };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
