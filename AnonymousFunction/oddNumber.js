// // a)Print odd numbers in an array

let arr = [1, 2, 3, 4, 5];
let odd = function (foo) {
  let res = [];
  for (let i = 0; i <= foo.length - 1; i++) {
    if (foo[i] % 2 == 1) {
      res.push(foo[i]);
    }
  }
  return res;
};
console.log(odd(arr));
