/**
 * @param {number[][]} grid
 * @return {number}
 */

// Method 1 Memoization

var minPathSum = function (grid, i = 0, j = 0, memo = {}) {
	// Finding Grid Length

	let m = grid.length;
	let n = grid[0].length;

	// Declaring key to store in the object
	let key = [i, j];

	// Checking key in memo object
	if (key in memo) {
		return memo[key];
	}

    // Base Case when we have i and j equals to m and n
	if (i == m || j == n) {
		return Infinity;
    }
    // If have left las
	if (i == m - 1 && j == n - 1) {
		return grid[i][j];
	}

	// Going down approach
	let down = minPathSum(grid, i + 1, j, memo);
	// Going right approach
	let right = minPathSum(grid, i, j + 1, memo);

	// Setting key in memo
	memo[key] = grid[i][j] + Math.min(down, right);

	// Returning memo key
	return memo[key];
};
