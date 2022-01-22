/**
 * https://leetcode.com/problems/maximum-average-subarray-i/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	var res = 0;
	var sum = 0;

	//Calculating first k element sum and average.
	for (var i = 0; i < k; i++) {
		sum += nums[i];
	}
	res = sum;
	if (k == nums.length) {
		return res / k;
	} else {
		// Now moving sliding window and calculating max of avg.
		for (let i = k; i < nums.length; i++) {
			sum += nums[i] - nums[i - k];

			res = Math.max(sum, res);
		}

		return res / k;
	}
};
