/**
 * https://leetcode.com/problems/concatenation-of-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
	var ans = [];

	for (var i = 0; i < nums.length; i++) {
		ans.push(nums[i]);
	}
	for (var i = 0; i < nums.length; i++) {
		ans.push(nums[i]);
	}
	return ans;
};
