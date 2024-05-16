// sum of all numbers in an array

let arr23 = [1, 2, 3, 4, 5];

let sum1 = (foo23) => {
  let int = 0;
  for (let i = 0; i < foo23.length; i++) {
    int += foo23[i];
  }
  return int;
};
console.log(sum1(arr23));
