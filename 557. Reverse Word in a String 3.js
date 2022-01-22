/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	s = s.split(" ");

	var srr = [];
	for (var i = 0; i < s.length; i++) {
		srr[i] = s[i].split("").reverse().join("");
	}
	return srr.join(" ");
};
