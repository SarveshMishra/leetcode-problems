/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	var N = nums.length;
	var res = [];
	for (var i = 0; i < N; i++) {
		var sum = 0;
		for (var j = 0; j <= i; j++) {
			sum = sum + nums[j];
		}
		res.push(sum);
	}
	return res;
};
// TC O(N^2), SC O(N)
