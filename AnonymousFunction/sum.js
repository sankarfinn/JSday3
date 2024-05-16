// // c)Sum of all numbers in an array

let arr2 = [1, 2, 3, 4, 5];
let sum = function (foo2) {
  let res2 = 0;
  for (let i = 0; i < foo2.length; i++) {
    res2 += foo2[i];
  }
  return res2;
};
console.log(sum(arr2));
