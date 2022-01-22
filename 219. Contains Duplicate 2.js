/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	var diff = 0;
	var map = new Map();

	for (var i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			diff = Math.abs(map.get(nums[i]) - i);
			if (diff <= k) return true;
		}
		map.set(nums[i], i);
	}

	return false;
};
