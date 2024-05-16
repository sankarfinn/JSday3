// Print odd number in an array
let arr21 = [1, 2, 3, 4, 5];

let oddA = (foo21) => {
  let ans = [];
  for (let i = 0; i < foo21.length; i++) {
    if (foo21[i] % 2 == 1) {
      ans.push(foo21[i]);
    }
  }
  return ans;
};
console.log(oddA(arr21));
