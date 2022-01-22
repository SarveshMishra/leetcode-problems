/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	var temp = {};

	for (var i = 0; i < nums.length; i++) {
		if (temp[nums[i]] == undefined) {
			temp[nums[i]] = 1;
		} else {
			temp[nums[i]]++;
		}
	}
	//console.log(temp)
	var flag = false;
	for (key in temp) {
		if (temp[key] > 1) flag = true;
	}

	if (flag) {
		return true;
	} else {
		return false;
	}
};
