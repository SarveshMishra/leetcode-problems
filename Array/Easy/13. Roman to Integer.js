var romanToInt = function (s) {
	s = s.split('').map(String);
	//console.log(s)

	let out = 0;

	let i = 0;
	while (i < s.length) {
		let curr = s[i];

		if (curr === 'I' && i + 1 < s.length && s[i + 1] === 'V') {
			out += 4;
			i += 2;
		} else if (curr === 'I' && i + 1 < s.length && s[i + 1] === 'X') {
			out += 9;
			i += 2;
		} else if (curr === 'X' && i + 1 < s.length && s[i + 1] === 'L') {
			out += 40;
			i += 2;
		} else if (curr === 'X' && i + 1 < s.length && s[i + 1] === 'C') {
			out += 90;
			i += 2;
		} else if (curr === 'C' && i + 1 < s.length && s[i + 1] === 'D') {
			out += 400;
			i += 2;
		} else if (curr === 'C' && i + 1 < s.length && s[i + 1] === 'M') {
			out += 900;
			i += 2;
		} else if (curr === 'V') {
			out += 5;
			i += 1;
		} else if (curr === 'L') {
			out += 50;
			i += 1;
		} else if (curr === 'D') {
			out += 500;
			i += 1;
		} else if (curr === 'M') {
			out += 1000;
			i += 1;
		} else {
			out +=
				curr === 'I'
					? 1
					: curr === 'X'
					? 10
					: curr === 'C'
					? 100
					: curr === 'M'
					? 1000
					: 0;
			i += 1;
		}
	}

	return out;
};

console.log(romanToInt('MCMXCIV'));
/*
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

*/
