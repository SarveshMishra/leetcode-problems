var MyStack = function () {
	this.stack = [];
	this.length = -1;
};

/**
 * https://leetcode.com/problems/implement-stack-using-queues/
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.length++;
	this.stack[this.length] = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	if (this.length == -1) {
		console.error("Stack Empty");
		return;
	} else {
		var top_element = this.stack[this.length];
		this.length--;
		return top_element;
	}
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	if (this.length == -1) {
		console.error("Stack Empty");
		return;
	} else {
		return this.stack[this.length];
	}
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	if (this.length == -1) {
		return true;
	} else {
		return false;
	}
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
