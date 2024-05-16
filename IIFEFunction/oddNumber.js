// Print odd number in an array
let arr8 = [1, 2, 3, 4, 5];
(function (foo8) {
  let ans8 = [];
  for (let i = 0; i < foo8.length; i++) {
    if (foo8[i] % 2 == 1) {
      ans8.push(foo8[i]);
    }
  }
  console.log(ans8);
})(arr8);
