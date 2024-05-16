// // b)Convert all the strings to title caps in a string array

let arr1 = [`TITLE`, `GUVI`];
let titleCaps = function (foo1) {
  let res1 = [];
  for (let i = 0; i < foo1.length; i++) {
    res1.push(foo1[i].charAt(0).toUpperCase() + foo1[i].slice(1).toLowerCase());
  }
  return res1;
};
console.log(titleCaps(arr1));
