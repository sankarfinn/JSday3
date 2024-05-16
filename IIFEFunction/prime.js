// Return all the prime numbers in an array
let arr11 = [1, 2, 3, 4, 5];
(function () {
  function isprime(foo11) {
    for (let i = 2; i < foo11; i++) {
      if (foo11 % i === 0) {
        return false;
      }
    }
    return foo11 > 1;
  }
  console.log(arr11.filter(isprime));
})();
