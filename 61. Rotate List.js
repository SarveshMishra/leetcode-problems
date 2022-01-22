/**
 * https://leetcode.com/problems/rotate-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head) {
		return null;
	}

	let length = 0;
	let curr = head;
	while (curr) {
		curr = curr.next;
		length++;
	}

	k = k % length;

	if (k === 0) {
		return head;
	}
	let new_end = head;

	for (let i = 0; i < length - 1 - k; i++) {
		new_end = new_end.next;
	}

	let newHead = new_end.next;

	new_end.next = null;

	let oldTail = newHead;

	while (oldTail.next) {
		oldTail = oldTail.next;
	}

	oldTail.next = head;

	return newHead;
};
