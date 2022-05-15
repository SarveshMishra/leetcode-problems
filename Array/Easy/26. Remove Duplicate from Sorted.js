var removeDuplicates = function (nums) {
	let i = 0;
	while (i < nums.length) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i + 1, 1);
			i--;
		}
		i++;
	}
	return nums.length;
};
let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
console.log(nums);
