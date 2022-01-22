/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid, i = 0, j = 0, memo = {}) {
	let m = grid.length;
	let n = grid[0].length;

	let key = [i, j];

	if (key in memo) {
		return memo[key];
	}
	if (i == m || j == n) {
		return Infinity; // m-1 and n-1 because of 0 base index
	}

	if (i == m - 1 && j == n - 1) {
		return grid[i][j];
	}

	let down = minPathSum(grid, i + 1, j, memo);

	let right = minPathSum(grid, i, j + 1, memo);

	memo[key] = grid[i][j] + Math.min(down, right);
	return memo[key];
};
