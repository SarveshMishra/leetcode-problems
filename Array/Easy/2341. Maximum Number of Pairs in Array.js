/**
 * * LC WEEKLY CONTEST 302
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
	let obj = {};
	let pair = 0;
	let leftover = 0;

	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] == undefined) {
			obj[nums[i]] = 1;
		} else {
			obj[nums[i]]++;
		}
	}

	for (key in obj) {
		if (obj[key] % 2 == 0) {
			pair += Math.floor(obj[key] / 2);
		} else {
			leftover += obj[key] % 2;
			pair += Math.floor(obj[key] / 2);
		}
	}

	return [pair, leftover];
};

// TODO: Find another best solution.