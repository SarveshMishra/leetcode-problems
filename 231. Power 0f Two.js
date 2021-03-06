/**
 * https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n == 0) {
		return false;
	}
	if (n == 1) {
		return true;
	}

	return isPowerOfTwo(n / 2);
};
