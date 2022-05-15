var isValid = function (s) {
	let stack = [];

	s = s.split('').map(String);

	let i = 0;
	let flag = true;

	while (i < s.length) {
		let curr = s[i];

		if (curr == '(' || curr == '[' || curr == '{') {
			stack.push(curr);
		} else if (curr === ')' && stack[stack.length - 1] === '(') {
			stack.pop();
		} else if (curr === ']' && stack[stack.length - 1] === '[') {
			stack.pop();
		} else if (curr === '}' && stack[stack.length - 1] === '{') {
			stack.pop();
		} else  {
			flag = false;
			break;
		}
		i++;
	}

	if (stack.length !== 0) {
		flag = false;
	}
	return flag;
};

console.log(isValid('[)'));
