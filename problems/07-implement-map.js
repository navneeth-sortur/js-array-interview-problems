/**
 * Implement Array.map() Method
 * ------------------------------------
 * Recreate the functionality of the built-in Array.prototype.map() method.
 *
 * Example:
 * Input: [1, 2, 3], callback: (x) => x * 2
 * Output: [2, 4, 6]
 *
 * Approaches:
 * 1️⃣ Using for loop (Optimized)
 * 2️⃣ Using forEach() (Alternate)
 */

/**
 * @param {any[]} arr
 * @param {(value:any, index:number, array:any[]) => any} callback
 * @returns {any[]} new array after applying callback
 */
function mapCustom(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Alternate:
// const mapCustom = (arr, callback) => {
//   const result = [];
//   arr.forEach((el, i, a) => result.push(callback(el, i, a)));
//   return result;
// };

module.exports = { mapCustom };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
