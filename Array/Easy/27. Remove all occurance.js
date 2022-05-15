var removeElement = function (nums, val) {
	let i = 0;
	while (i < nums.length) {
		if (nums[i] === val) {
            nums.splice(i, 1);
            i--
		}
		i++;
	}

	return nums.length;
};

let nums = [3, 2, 2, 3],
	val = 3;

console.log(removeElement(nums, val));

console.log(nums);
