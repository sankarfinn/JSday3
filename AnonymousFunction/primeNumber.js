//d)Return all the prime numbers in an array
let arr3 = [1, 2, 3, 4, 5];
let prime = function (foo3) {
  for (let i = 2; i < foo3; i++) {
    if (foo3 % i === 0) {
      return false;
    }
  }
  return foo3 > 1;
};
console.log(arr3.filter(prime));
