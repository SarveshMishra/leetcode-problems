//https://leetcode.com/problems/valid-anagram/
// This program will give output true only if both s1 and s2 have same number of space. For better result use all space removed program.
var isAnagram = function (S1, S2) {
	var S1 = S1.trim().split("").sort().join("");
	var S2 = S2.trim().split("").sort().join("");
	
	if (S1 === S2) {
		console.log("True");
	} else {
		console.log("False");
	}
	console.log(S1);
	console.log(S2);
};
S1 = "masai school a transformation"
S2 = "trasnformation school a masai"
isAnagram(S1, S2)

// All space reomved program

var S1 = "finale";
var S2 = "fa li ne";

var count = 0;
function trimAllSpace(str) {
	var lower_case = "abcdefghijklmnopqrstuvwxyz";
	var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var pattern = "";

	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < 26; j++) {
			if (str[i] === upper_case[j] || str[i] === lower_case[j]) {
				pattern += str[i];
			}

			if (str[i] === " ") {
			}
		}
	}
	return pattern;
}
S1 = trimAllSpace(S1);
S2 = trimAllSpace(S2);
S1 = S1.split("").sort().join("");
S2 = S2.split("").sort().join("");

if (S1 === S2) {
	console.log("True");
} else {
	console.log("False");
}