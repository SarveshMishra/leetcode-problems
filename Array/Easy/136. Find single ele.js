var singleNumber = function (nums) {
	let i = 1;
	let temp = nums[0];
	while (i < nums.length) {
		temp = temp ^ nums[i];
		i++;
	}
	return temp;
};

let nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
