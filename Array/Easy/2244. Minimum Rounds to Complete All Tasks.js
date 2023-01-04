/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
	let obj = {};
	tasks.forEach((element) => {
		if (!obj[element]) {
			obj[element] = 1;
		} else {
			obj[element]++;
		}
    });
    let minRound = 0
    for (const key in obj) {
        let value = obj[key]
        if (value < 2) {
            return -1
        } else if(value === 3 || value === 2) {
            minRound++
        } else if (value > 3) {
            minRound += Math.ceil((value)/3)
        }
    }
	return minRound;
};
console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
