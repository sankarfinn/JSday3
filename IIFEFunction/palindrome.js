// e)Return all the palindromes in an array
let arr12 = [`level`, `hello`, `anna`, `world`, `madam`, `noon`];

(function (foo12) {
  let palin = [];
  for (let i = 0; i < foo12.length; i++) {
    let word = foo12[i];
    let lower = word.toLowerCase();
    if (lower === lower.split("").reverse().join("")) palin.push(word);
  }
  console.log(palin);
})(arr12);
