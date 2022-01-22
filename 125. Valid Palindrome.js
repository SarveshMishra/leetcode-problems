// https://leetcode.com/problems/valid-palindrome/

var str = "0P";
var s = str.replace(/[^0-9a-zA-Z]+/gi, "");
var s = str.toLowerCase();

//console.log(s);
var N = s.length;
var reverse = "";
var checked = false;

for (var i = N - 1; i >= 0; i--) {
	reverse += s[i];
}

//console.log(reverse);

for (var j = 0; j < N; j++) {
	if (reverse[j] != s[j]) {
		checked = true;
	}
}

if (!checked) {
	console.log("Yes");
} else {
	console.log("No");
}
