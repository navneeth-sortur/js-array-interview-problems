/**
 * Pair Sum - Find All Unique Pairs That Sum to Target
 * ------------------------------------
 * Given an array of integers and a target number,
 * return all unique pairs that add up to the target.
 *
 * Example:
 * Input: arr = [1, 2, 3, 4, 5, 6], target = 7
 * Output: [[1, 6], [2, 5], [3, 4]]
 *
 * Approaches:
 * 1️⃣ Using a Set for O(n) solution (Optimized)
 * 2️⃣ Using brute-force double loop O(n^2)
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[][]} array of unique pairs that sum to target
 */
function pairSum(arr, target) {
  const seen = new Set();
  const pairs = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      const sortedPair = [Math.min(num, complement), Math.max(num, complement)];
      pairs.add(JSON.stringify(sortedPair));
    }
    seen.add(num);
  }

  return Array.from(pairs).map(pair => JSON.parse(pair));
}

// Alternate brute-force O(n^2):
// function pairSum(arr, target) {
//   const pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) pairs.push([arr[i], arr[j]]);
//     }
//   }
//   return pairs;
// }

module.exports = { pairSum };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
