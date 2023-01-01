/**
 * @param {string[]} operations
 * @return {number}
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */
var finalValueAfterOperations = function (operations) {
  let finalValue = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == "--X" || operations[i] == "X--") {
      finalValue--;
    } else {
      finalValue++;
    }
  }
  return finalValue;
};
