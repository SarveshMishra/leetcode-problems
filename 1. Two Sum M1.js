/**
 * https://leetcode.com/problems/two-sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
	// Solving with 2 pointer approach.

	// Starting both as adjacent index.
	var i = 0;
	var j = 1;

	var length = nums.length;
	var flag = true;
	var res = [];

	while (i < length && j < length && i != j && flag) {
		var sum = nums[i] + nums[j];

		if (sum == target) {
			res.push(i, j);
			flag = false;
			break;
		}
		if (j == length - 1) {
			i++;
			j = i + 1;
		} else if (j < length) {
			j++;
		}
	}
	if (flag) {
		console.log(-1 + " " + -1);
	}
	return res;
};
