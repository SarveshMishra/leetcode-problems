var maxProfit = function (prices) {
	let max = 0;
	let curr_small = Infinity;

	let i = 0;
	while (i < prices.length) {
		if (prices[i] < curr_small) {
			curr_small = prices[i];
		}
		let diff = prices[i] - curr_small;
		if (diff > max) {
			max = diff;
		}
		i++;
	}
	// console.log(curr_small);
	return max;
};

let prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
