let no_of_rows = 5;

let res = [[1], [1, 1]];

if (no_of_rows === 1) {
  return [[1]];
}
if (no_of_rows === 2) {
  return [[1], [1, 1]];
} else {
  let i = 3;
  while (i <= no_of_rows) {
    let temp = new Array(i).fill(0);
    temp[0] = 1;
    temp[i - 1] = 1;

    res.push(temp);
    i++;
  }
}

//console.log(res);
let j = 2;
while (j < res.length) {
  let k = 1;
  //console.log(res[j]);
  let z = 0;
  while (k < res[j].length - 1) {
    // console.log(res[j][k], res[j][z], res[j][z + 1]);
    res[j][k] = res[j - 1][z] + res[j - 1][z + 1];
    k++;
    z++;
  }
  j++;
}

console.log(res);
