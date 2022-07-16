/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	let ans = [];
	let j = 0;
	for (let i = 0; i < n; i++) {
		ans[j] = nums[i];
		ans[j + 1] = nums[n + i];
		j += 2;
	}
	return ans;
};
// TC is O(n) and SC is O(n)
// TODO: Write a solution with lesser complexity.
