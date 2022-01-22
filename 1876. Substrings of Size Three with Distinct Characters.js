/**
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
	var len = s.length;
	var count = 0;
	var k = 3;
	var i = 0;
	// calculating first K characters

	//Now running sliding window to find another substrings
	for (var i = 0; i <= len - k; i++) {
		if (s[i] != s[i + 1] && s[i] != s[i + 2] && s[i + 1] != s[i + 2]) {
			count++;
		}
	}
	return count;
};
