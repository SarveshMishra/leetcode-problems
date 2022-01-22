/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	var newNode = new ListNode();

	var temp = newNode;

	while (l1 != null && l2 != null) {
		if (l1.val < l2.val) {
			newNode.next = l1;
			l1 = l1.next;
		} else {
			newNode.next = l2;
			l2 = l2.next;
		}

		newNode = newNode.next;
	}
	if (l1 != null) {
		newNode.next = l1;
	}
	if (l2 != null) {
		newNode.next = l2;
	}
	return temp.next;
};
