/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
	// console.log(costs);
	 let total = 0;
		let count = 0;
		costs.sort((a, b) => a - b);
		for (let i of costs) {
			total += i;
			if (total > coins) break;
			count++;
		}
		return count;
};

console.log(maxIceCream([4,7,6,4,4,2,2,4,9,8],
41));
