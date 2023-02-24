// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
  if (n < 4) return n
  let table = new Array(2)
  table[0] = 1
  table[1] = 2
  for (let i = 2 ; i < n - 1 ; i ++) {
    const nextEl = table[0] + table[1]
    table[0] = table[1]
    table[1] = nextEl
  }
  return table[0] + table[1]
}

console.log(climbStairs(5))

// let table = new Array(n)
// table[0] = 1
// table[1] = 2
// for (let i = 2 ; i < n ; i ++) {
//   table[i] = table[i-1] + table[i-2]
// }
// return table[n-1]