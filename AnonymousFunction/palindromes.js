// e)Return all the palindromes in an array
let arr4 = [`level`, `hello`, `anna`, `world`, `madam`, `noon`];

let palindroms = function (foo4) {
  let palin = [];
  for (let i = 0; i < foo4.length; i++) {
    let word = foo4[i];
    let lower = word.toLowerCase();
    if (lower === lower.split("").reverse().join("")) {
      palin.push(word);
    }
  }
  return palin;
};
console.log(palindroms(arr4));
