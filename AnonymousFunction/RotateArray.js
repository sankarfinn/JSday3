// right shift
let arr6 = [1, 2, 3, 4, 5];
let n = 2;
let rotateArray = function (foo6, n) {
  if (foo6.length <= 1) {
    return foo6;
  }
  for (let i = 0; i < n; i++) {
    let lastelement = foo6.pop();
    foo6.unshift(lastelement);
  }
  return foo6;
};
console.log(rotateArray(arr6, n));
// left shift

ar = [1, 2, 3, 4, 5];
rr = 2;

let rotate = function (k, m) {
  if (k.length <= 1) {
    return k;
  }
  for (let j = 0; j < m; j++) {
    let firstelement = k.shift();
    k.push(firstelement);
  }
  return k;
};
console.log(rotate(ar, rr));
