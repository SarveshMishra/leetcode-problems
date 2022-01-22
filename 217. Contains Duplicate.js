/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	var temp = {};

	for (var i = 0; i < nums.length; i++) {
		if (temp[nums[i]] != undefined) {
			return true;
		}

		temp[nums[i]] = 1;
	}
	return false;
};
