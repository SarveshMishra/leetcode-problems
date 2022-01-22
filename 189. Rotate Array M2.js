/**
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
	let temp = nums.slice(0, index);
	nums.splice(0, index);

	for (var i = 0; i < temp.length; i++) {
		nums.push(temp[i]);
	}
};
