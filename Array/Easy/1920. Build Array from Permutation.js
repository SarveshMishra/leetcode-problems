/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
	let ans = [];
	for (let i = 0; i < nums.length; i++) {
		ans[i] = nums[nums[i]];
	}
	return ans;
};
// TC O(N), SC O(N)

// TODO: Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?

