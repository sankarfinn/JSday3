// Return all the prime numbers in an array
let arr24 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let Prime1 = (foo24) => {
  for (let i = 2; i < foo24; i++) {
    if (foo24 % i == 0) {
      return false; // not a prime
    }
    return foo24 > 1;
  }
};
console.log(arr24.filter(Prime1));
