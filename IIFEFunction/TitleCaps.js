// Convert all the strings to title caps in a string array

let arr9 = ["TITLE", "GUVI"];
(function (foo9) {
  let ans9 = [];
  for (let i = 0; i < foo9.length; i++) {
    ans9.push(foo9[i].charAt(0).toUpperCase() + foo9[i].slice(1).toLowerCase());
  }
  console.log(ans9);
})(arr9);
