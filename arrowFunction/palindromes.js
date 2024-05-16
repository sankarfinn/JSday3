// return all the palindromes in an array

let arr25 = [`level`, `index`, `anna`, `noon`, `hello`, `madam`];

let Palin1 = (foo25) => {
  let final = [];
  for (let i = 0; i < foo25.length; i++) {
    let word = foo25[i].toLowerCase();
    if (word === word.split("").reverse().join("")) {
      final.push(word);
    }
  }
  return final;
};
console.log(Palin1(arr25));
