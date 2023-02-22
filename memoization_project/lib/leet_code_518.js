// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// var change = function(amount, coins, memo = {}) {
//   if (amount in memo) return memo[amount]
//   if (amount === 0) return 1
//   const options = []
//   coins.forEach(coin => {
//       if (coin <= amount) {
//           options.push(1 + change(amount - coin, coins, memo))
//       }
//   })
//   memo[amount] = options.length
//   console.log(memo)
// //   return memo[amount]
// // };

// console.log(change(5,[1,2,5]))


function change(amount, coins, memo = {}) {
  if (amount === 0) return 1;
  if (coins.length === 0) return 0;

  let key = `${amount}-${coins.join(',')}`;
  if (key in memo) return memo[key];

  let coinVal = coins[coins.length - 1];

  let total = 0;
  for (let quanitity = 0; quanitity <= (amount / coinVal); quanitity++) {
      total += change(amount - (quanitity * coinVal), coins.slice(0, -1), memo);
  }

  memo[key] = total;
  return total;
}

console.log(change(5,[1,2,5]))