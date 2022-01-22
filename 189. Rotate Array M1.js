/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	k = k % nums.length;
	var n = nums.length;

	var index = n - k;

	if (index === n) {
		index = 0;
	}
	var temp = [];
	var result = [];
	for (var i = 0; i < n; i++) {
		result.push(nums[index]);
		index = (index + 1) % n;
	}

	for (var i = 0; i < n; i++) {
		nums.splice(i, 1, result[i]);
	}
};
