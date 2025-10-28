/**
 * Group Objects by Property
 * --------------------------
 * Given an array of objects and a key, group the objects by that key.
 *
 * Example:
 * Input: [{dept:"IT",name:"Alice"},{dept:"HR",name:"Bob"},{dept:"IT",name:"Charlie"}], key: "dept"
 * Output: { IT: [{...}, {...}], HR: [{...}] }
 *
 * Approach: Use reduce()
 */

/**
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object} grouped result
 */
function groupByProperty(arr, key) {
  return arr.reduce((acc, obj) => {
    const groupKey = obj[key];
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(obj);
    return acc;
  }, {});
}

module.exports = { groupByProperty };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
