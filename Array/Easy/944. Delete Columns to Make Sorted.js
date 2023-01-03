/**
 * @param {string[]} strs
 * @return {number}
 * https://leetcode.com/problems/delete-columns-to-make-sorted/description/
 * @TC O(N^2)
 */
var minDeletionSize = function (strs) {
    let result = 0
	let len = strs[0].length;
	for (let i = 0; i < len; i++) {
		let string = '';
		for (let j = 0; j < strs.length; j++) {
			string += strs[j][i];
		}
        console.log(string);
        if (string != string.split('').sort().join('')) {
            result++
        }
    }
    return result
};

console.log(minDeletionSize(['a', 'b', 'c']));
