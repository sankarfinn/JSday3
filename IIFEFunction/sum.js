// Sum of all numbers in an array

let arr10 = [1, 2, 3, 4, 5];
(function (foo10) {
  let ans10 = 0;
  for (let i = 0; i < foo10.length; i++) {
    ans10 += foo10[i];
  }
  console.log(ans10);
})(arr10);
