//https://leetcode.com/problems/can-place-flowers/

// 1 means folwer and 0 means empty, I have to place such that no adjacent flower
function canPlaceFlowers(flowerbed, n) {
	let i = 0;
	let count = 0;
	while (i < flowerbed.length) {
		if (flowerbed[i] == 1) {
			i += 2;
		}
		if (flowerbed[i] == 0 && flowerbed[i + 1] != 1 && flowerbed[i - 1] != 1) {
			count++;
			i += 2;
		} else {
			i++;
		}
	}

	//console.log(count);

	if (count >= n) {
		return true;
	} else {
		return false;
	}
}

let flowerbed = [0, 1, 0, 1, 0, 0];
let n = 2;

console.log(canPlaceFlowers(flowerbed, n));
