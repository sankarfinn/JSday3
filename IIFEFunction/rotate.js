let arr26 = [1, 2, 3, 4, 5];
let n1 = 2;

(function (foo26, n1) {
  if (foo26.length <= 1) {
    return foo26;
  }
  for (let i = 0; i < n1; i++) {
    let lastelement = foo26.pop();
    foo26.unshift(lastelement);
  }
  console.log(foo26);
})(arr26, n1);
