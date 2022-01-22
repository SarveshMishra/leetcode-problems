var MyQueue = function () {
	this.queue = [];
	this.length = 0;
	this.front = -1;
	this.rear = -1;
};

/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.rear++;
	this.queue[this.rear] = x;
	this.length++;

	if (this.front == -1) {
		this.front++;
	}
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	if (this.length == 0) {
		console.error("Queue is Empty");
		return;
	} else {
		var front_element = this.queue[this.front];
		this.front++;
		this.length--;
		return front_element;
	}
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	if (this.length == 0) {
		console.error("Queue is Empty");
		return;
	} else {
		return this.queue[this.front];
	}
};

/**
 *
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	if (this.length == 0) {
		return true;
	} else {
		return false;
	}
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
