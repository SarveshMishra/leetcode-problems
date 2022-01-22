/**
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
	var res = [];

	function comb(temp, curr_index) {
		if (temp.length == k) {
			res.push([...temp]);
			return;
		}
		if (temp.length < k) {
			for (let i = curr_index; i <= n; i++) {
				temp.push(i);
				comb(temp, i + 1);
				temp.pop();
			}
		}
	}
	comb([], 1);
	return res;
};
