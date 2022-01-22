/**
 * https://leetcode.com/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	var res = [];
	var i = 0;

	while (i < s.length) {
		res.push(s.charAt(i));

		if (res[res.length - 1] === "#") {
			res.splice(res.length - 2, 2);
		}
		i++;
	}
	var result = [];
	var i = 0;

	while (i < t.length) {
		result.push(t.charAt(i));

		if (result[result.length - 1] === "#") {
			result.splice(result.length - 2, 2);
		}
		i++;
	}

	if (res.length == result.length) {
		for (var i = 0; i < res.length; i++) {
			if (res[i] != result[i]) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
};
