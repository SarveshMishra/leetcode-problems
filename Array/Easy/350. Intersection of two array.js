var intersect = function (nums1, nums2) {
	let i = 0;
	let n1 = nums1.length;
	let n2 = nums2.length;
	let res = [];
	let n = Math.min(n1, n2);
	let flag = true;
	n === n1 ? (flag = true) : (flag = false);

	while (i < n) {
		if (flag) {
			let currEle = nums1[i];
			let i2 = nums2.indexOf(currEle);

			if (i2 !== -1) {
				nums2.splice(i2, 1);
				res.push(currEle);
			}
		} else {
			let currEle = nums2[i];
			let i2 = nums1.indexOf(currEle);
			if (i2 !== -1) {
				nums1.splice(i2, 1);
				res.push(currEle);
			}
		}
		i++;
	}
	return res;
};
let nums1 = [3, 1, 2],
	nums2 = [1, 1];

console.log(intersect(nums1, nums2));
