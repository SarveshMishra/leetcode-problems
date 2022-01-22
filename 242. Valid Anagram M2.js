/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	var s = s.trim().split("").sort().join("");
	var t = t.trim().split("").sort().join("");
	if (s == t) {
		return true;
	} else {
		return false;
	}
};
