/**
 * @param {number[][]} (accounts)
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let maxSum = -1;
	for (let i = 0; i < accounts.length; i++) {
		let sum = accounts[i].reduce((a, b) => a + b);
		maxSum = Math.max(sum, maxSum);
	}
	return maxSum;
};

// TC O(N^2), SC O(1)

