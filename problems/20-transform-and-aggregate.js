/**
 * Transform and Aggregate Using map() + reduce()
 * -----------------------------------------------
 * Given an array of products with price and quantity,
 * calculate the total inventory value.
 *
 * Example:
 * Input: [{price:10, qty:2}, {price:5, qty:4}]
 * Output: 10*2 + 5*4 = 40
 *
 * Approach: Use map() + reduce()
 */

/**
 * @param {{price:number, qty:number}[]} products
 * @returns {number} total value
 */
function totalInventoryValue(products) {
  return products
    .map(p => (p.price || 0) * (p.qty || 0))
    .reduce((sum, val) => sum + val, 0);
}

module.exports = { totalInventoryValue };

/**
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */
