/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	var ans = new Array(38);
	ans[0] = 0;
	ans[1] = 1;
	ans[2] = 1;

	for (var i = 3; i < 38; i++) {
		ans[i] = ans[i - 1] + ans[i - 2] + ans[i - 3];
	}
	return ans[n];
};
