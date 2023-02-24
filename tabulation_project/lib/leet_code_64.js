// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
  const cols = grid[0].length;
  const rows = grid.length;
  let table = new Array(rows);
  for (let i = 0; i < rows; i++) {
    table[i] = new Array(cols).fill(0);
  }
  table[0][0] = grid[0][0];
  for (let j = 1; j < cols; j++) {
    table[0][j] = grid[0][j] + table[0][j - 1];
  }
  for (let i = 1; i < rows; i++) {
    table[i][0] = grid[i][0] + table[i - 1][0];
  }
  for (let i = 1 ; i < rows ; i++) {
    for (let j = 1 ; j < cols ; j++) {
      table[i][j] = grid[i][j] + Math.min(table[i-1][j], table[i][j-1])
    }
  }
  return table[rows-1][cols-1]
}