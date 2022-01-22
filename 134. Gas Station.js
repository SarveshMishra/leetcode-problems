//https://leetcode.com/problems/gas-station/

let gas = [2, 3, 4];
let cost = [3, 4, 2];
function travel(gas, cost) {
  let tank = 0;
  let start = null;
  let i = 0;
  let sum = 0;
  while (i < gas.length) {
    tank += gas[i] - cost[i];
    sum += gas[i] - cost[i];
    console.log(tank);
    console.log(sum);

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
    i++;
  }
  console.log(tank);

  if (sum < 0) return -1;
  return start;
}

console.log(travel(gas, cost));
