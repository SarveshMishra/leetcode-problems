/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// Using javascript key value pair method. It will make space complexity O(N) but decrease time complexity

	let hashtable = {};

	for (let i = 0; i < nums.length; i++) {
		// finding difference for which we have to find next element
		let diff = target - nums[i];

		// If that difference is present in hashtable then it will return O(1) time
		if (hashtable[nums[i]] !== undefined) {
			return [hashtable[nums[i]], i];
		} else {
			// Otherwise set the diff with i index
			hashtable[diff] = i;
		}
	}

	// finally if there is no index present then return -1 -1
	return [-1, -1];
};
