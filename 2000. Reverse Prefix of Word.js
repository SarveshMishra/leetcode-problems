/**
 * https://leetcode.com/problems/reverse-prefix-of-word/
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
	for (var i = 0; i < word.length; i++) {
		if (word[i] === ch) {
			var k = i;
			break;
		}
	}
	if (k === undefined) {
		return word;
	} else {
		var str = "";
		for (var i = k; i >= 0; i--) {
			var str = str + word[i];
		}

		for (var i = k + 1; i < word.length; i++) {
			var str = str + word[i];
		}
		return str;
	}
};
