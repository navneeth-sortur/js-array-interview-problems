/**
 * Implement Array.filter() Method
 * ------------------------------------
 * Recreate the functionality of Array.prototype.filter().
 *
 * Example:
 * Input: [1, 2, 3, 4, 5], callback: (x) => x % 2 === 0
 * Output: [2, 4]
 *
 * Approaches:
 * 1️⃣ Using for loop (Optimized)
 * 2️⃣ Using forEach() (Alternate)
 */

/**
 * @param {any[]} arr
 * @param {(value:any, index:number, array:any[]) => boolean} callback
 * @returns {any[]} new filtered array
 */
function filterCustom(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Alternate using forEach:
// const filterCustom = (arr, cb) => {
//   const res = [];
//   arr.forEach((val, i, a) => cb(val, i, a) && res.push(val));
//   return res;
// };

module.exports = { filterCustom };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
