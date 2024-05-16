// Convert all the strings to title caps in a string array

let arr22 = [`january`, `february`, `march`];

let title = (foo22) => {
  for (let i = 0; i < foo22.length; i++) {
    foo22[i] =
      foo22[i].charAt(0).toUpperCase() + foo22[i].slice(1).toLowerCase();
  }
  return foo22;
};
console.log(title(arr22));
