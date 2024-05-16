// // patten

// let row = 3;
// let col = 5;

// for (let i = 1; i <= row; i++) {
//   let res = [];
//   for (let j = 1; j <= col; j++) {
//     if (i == 1 || j == 1 || i == row || j == col) res.push("*");
//     else res.push(" ");
//   }
//   console.log(res.join(" "));
// }

// let isPrime = function (num) {
//   if (num == 2) return true;
//   if (num % 2 == 0) return false;
//   for (let i = 3; i * i <= num; i += 2) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };

// let num = 4;

// if (num < 1 || num > 1000) {
//   console.log("invalid input");
// } else {
//   if (isPrime(num)) {
//     console.log("prime");
//   } else {
//     console.log("not prime");
//   }
// }
let arre = [1, 2, 3, 3, 4, 4, 5, 5];

let dummy = function (numm) {
  return numm.reduce((acc, index) => {
    if (!acc.includes(index)) {
      acc.push(index);
    }
    return acc;
  }, []);
};
console.log(dummy(arre));
